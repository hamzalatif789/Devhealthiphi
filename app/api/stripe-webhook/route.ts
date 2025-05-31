import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'setup_intent.succeeded':
        await handleSetupIntentSucceeded(event.data.object as Stripe.SetupIntent)
        break
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleSetupIntentSucceeded(setupIntent: Stripe.SetupIntent) {
  const { error } = await supabaseAdmin
    .from('pledges')
    .update({
      stripe_payment_method_id: setupIntent.payment_method as string,
    })
    .eq('stripe_setup_intent_id', setupIntent.id)

  if (error) {
    console.error('Failed to update pledge with payment method:', error)
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  // Handle successful payment (when we actually charge users)
  const setupIntentId = paymentIntent.metadata?.setup_intent_id

  if (setupIntentId) {
    const { error } = await supabaseAdmin
      .from('pledges')
      .update({ is_charged: true })
      .eq('stripe_setup_intent_id', setupIntentId)

    if (error) {
      console.error('Failed to mark pledge as charged:', error)
    }
  }
}





