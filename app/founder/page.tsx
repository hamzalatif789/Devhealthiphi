"use client"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FounderSignupForm } from "@/components/founder-signup-form";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_URL_PUBLIC_KEY!
);

export default function FounderPage() {
  const elementsOptions = {
    appearance: {
      theme: "night" as const,
      variables: {
        colorPrimary: "#60a5fa",
        colorBackground: "#1e293b",
        colorText: "#ffffff",
        colorDanger: "#ef4444",
        fontFamily: "system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "6px",
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Elements stripe={stripePromise} options={elementsOptions}>
        <FounderSignupForm />
      </Elements>
      <Footer />
    </main>
  );
}
