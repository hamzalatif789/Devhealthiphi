import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
// import { emailService, emailTemplates } from '@/lib/email'
import { z } from 'zod'

const cancelSchema = z.object({
  email: z.string().email('Invalid email address'),
  secret: z.string().min(1, 'Secret is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, secret } = cancelSchema.parse(body)

    const { data: pledge, error: findError } = await supabaseAdmin
      .from('pledges')
      .select('*')
      .eq('user_email', email)
      .eq('secret', secret)
      .eq('is_charged', false)
      .eq('is_cancelled', false)
      .single()

    if (findError || !pledge) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or secret, or pledge already processed' },
        { status: 400 }
      )
    }

    const { error: cancelError } = await supabaseAdmin
      .from('pledges')
      .update({ is_cancelled: true })
      .eq('id', pledge.id)

    if (cancelError) {
      console.error('Pledge cancellation error:', cancelError)
      return NextResponse.json(
        { success: false, message: 'Failed to cancel pledge' },
        { status: 500 }
      )
    }

    const { data: vaultData, error: vaultError } = await supabaseAdmin
      .rpc('update_vault_status', { pledge_delta: 1,
    seats_delta: pledge.seats })

    

    if (vaultError) {
      console.error('Vault status update error:', vaultError)
      await supabaseAdmin
        .from('pledges')
        .update({ is_cancelled: false })
        .eq('id', pledge.id)
      
      return NextResponse.json(
        { success: false, message: 'Failed to update pledge counts' },
        { status: 500 }
      )
    }

    // try {
    //   const emailData = emailTemplates.pledgeCancelled({
    //     fullName: pledge.full_name,
    //     seats: pledge.seats,
    //   })

    //   await emailService.sendEmail({
    //     to: email,
    //     ...emailData,
    //   })
    // } catch (emailError) {
    //   console.error('Cancellation email failed:', emailError)
    // }

    return NextResponse.json({
      success: true,
      message: 'Pledge cancelled successfully',
    })
  } catch (error) {
    console.error('Cancel pledge API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
