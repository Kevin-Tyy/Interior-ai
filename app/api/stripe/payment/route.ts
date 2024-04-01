import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let data = await request.json();
  let priceId = data.priceId;

  // Determine environment
  const isDevelopment = process.env.NODE_ENV === "development";

  // Set URLs based on environment
  const successUrl = isDevelopment ? "http://localhost:3000" : "https://interior-ai-lyart.vercel.app";
  const cancelUrl = isDevelopment ? "http://localhost:3000" : "https://interior-ai-lyart.vercel.app";

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
    // automatic_tax: { enabled: true },
  });

  return NextResponse.json(session.url);
}
