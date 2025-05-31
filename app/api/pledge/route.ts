// app/api/pledge/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { stripe } from '@/lib/stripe'
import { generateSecret, calculateAmount } from '@/lib/utils'
import { z } from 'zod'

const pledgeSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  seats: z.number().min(1, 'Must reserve at least 1 seat').max(20, 'Maximum 20 seats per user'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { full_name, email, seats } = pledgeSchema.parse(body)

    const totalAmount = calculateAmount(seats)
    const secret = generateSecret()

    // Create Stripe customer first
    const customer = await stripe.customers.create({
      email,
      name: full_name,
      metadata: {
        seats: seats.toString(),
        total_amount: totalAmount.toString(),
      },
    })

    // Create setup intent with the customer
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      usage: 'off_session',
      metadata: {
        email,
        full_name,
        seats: seats.toString(),
        total_amount: totalAmount.toString(),
      },
    })
    console.log(setupIntent.id, 'setupIntent.id')
    console.log(setupIntent.client_secret, 'setupIntent.client_secret')
    console.log(customer.id, 'customer.id')
    // Insert pledge into database
    const { data: pledgeData, error: pledgeError } = await supabaseAdmin
      .from('pledges')
      .insert([
        {
          user_email: email,
          full_name,
          seats,
          total_amount: totalAmount,
          stripe_setup_intent_id: setupIntent.id,
          stripe_customer_id: customer.id,
          secret,
          created_at: new Date().toISOString(),
          is_charged: false,
          is_cancelled: false,
          // Initialize payment method fields as null - will be updated via webhook
          stripe_payment_method_id: null,
          payment_method_configuration_id: null,
          payment_method_configuration_parent: null,
        },
      ])
      .select()
      .single()

    if (pledgeError) {
      console.error('Pledge creation error:', pledgeError)
      return NextResponse.json(
        { success: false, error: 'Failed to create pledge' },
        { status: 500 }
      )
    }

    // Update vault status
    const { data: vaultData, error: vaultError } = await supabaseAdmin
      .rpc('update_vault_status', { 
        pledge_delta: 1,
        seats_delta: seats 
      })

    if (vaultError) {
      console.error('Vault status update error:', vaultError)
      // Rollback the pledge creation
      await supabaseAdmin.from('pledges').delete().eq('id', pledgeData.id)
      return NextResponse.json(
        { success: false, error: 'Failed to update vault status' },
        { status: 500 }
      )
    }

    // Check if we've reached the threshold
    if (vaultData && vaultData.total_seats >= 400 && !vaultData.pledge_reached_at) {
      await handleThresholdReached()
    }

    return NextResponse.json({
      success: true,
      client_secret: setupIntent.client_secret,
      pledge_id: pledgeData.id,
      customer_id: customer.id,
      total_seats: vaultData?.total_seats || 0,
    })
  } catch (error) {
    console.error('FounderPass pledge API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleThresholdReached() {
  try {
    console.log('Threshold of 400 pledges reached!')
    
    // Update vault status to mark when threshold was reached
    await supabaseAdmin
      .from('vault_status')
      .update({
        pledge_reached_at: new Date().toISOString(),
      })
      .eq('id', 1)

    // Get all active pledges for notification
    const { data: activePledges } = await supabaseAdmin
      .from('pledges')
      .select('user_email, full_name, seats')
      .eq('is_charged', false)
      .eq('is_cancelled', false)

    console.log(`Found ${activePledges?.length || 0} active pledges to notify`)

    // Here you would send emails to all pledgers
    // Uncomment and implement when email service is ready
    /*
    if (activePledges) {
      for (const pledge of activePledges) {
        try {
          const emailData = emailTemplates.thresholdReached({
            fullName: pledge.full_name,
            seats: pledge.seats,
          })

          await emailService.sendEmail({
            to: pledge.user_email,
            ...emailData,
          })
        } catch (emailError) {
          console.error(`Failed to send threshold email to ${pledge.user_email}:`, emailError)
        }
      }
    }
    */
  } catch (error) {
    console.error('Error handling threshold reached:', error)
  }
}
