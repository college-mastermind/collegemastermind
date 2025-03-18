// app/api/webhook/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const dynamic = 'force-dynamic'; // Required for proper webhook handling

export async function POST(request) {
  try {
    // Get raw body as ArrayBuffer
    const rawBody = await request.arrayBuffer();
    const payload = Buffer.from(rawBody);

    // Get Stripe signature from headers
    const headersList = await headers();
    const signature = headersList.get('stripe-signature') || '';

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("✅ Webhook Event Received:", event.type);

    // Handle checkout events
    switch (event.type) {
        
      case 'checkout.session.async_payment_failed':
        const failedSession = event.data.object;
        console.log("Payment Failed:", failedSession.id);
        break;
        
      case 'checkout.session.async_payment_succeeded':
        const succeededSession = event.data.object;
        console.log("Payment Succeeded:", succeededSession.id);
        break;
        
      case 'checkout.session.completed':
        const completedSession = event.data.object;
        console.log("Checkout Completed:", completedSession.id);
        break;
        
      case 'checkout.session.expired':
        const expiredSession = event.data.object;
        console.log("Checkout Expired:", expiredSession.id);
        break;
        
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json(
      { received: true, message: "Webhook processed successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Webhook Error:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }
}


