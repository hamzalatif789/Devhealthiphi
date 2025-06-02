"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Star, Shield, Users, Crown } from "lucide-react"
import { CardElementstrip } from "./cardelementstripe"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

// Initialize Stripe with the correct environment variable name
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Inner form component that uses Stripe hooks
function FounderSignupFormInner() {
  const { t } = useLanguage()
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    seats: 1,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cardValid, setCardValid] = useState(false)
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    card: ""
  })
  const [stripeReady, setStripeReady] = useState(false)

  useEffect(() => {
    // Check when Stripe is fully loaded
    if (stripe && elements) {
      setStripeReady(true)
    }
  }, [stripe, elements])

  const handleInputChange = (field: string, value: string | number) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    
    // Clear error when user types
    if (field === "name" && formErrors.name) {
      setFormErrors(prev => ({ ...prev, name: "" }))
    }
    if (field === "email" && formErrors.email) {
      setFormErrors(prev => ({ ...prev, email: "" }))
    }
  }

  const handleSliderChange = (value: number[]) => {
    setFormState((prev) => ({ ...prev, seats: value[0] }))
  }

  const handleSeatsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 1 && value <= 20) {
      setFormState((prev) => ({ ...prev, seats: value }))
    }
  }

  const handleCardChange = (isValid: boolean, error?: string) => {
    setCardValid(isValid)
    setFormErrors(prev => ({
      ...prev,
      card: error ? error : ""
    }))
  }

  const getPrice = () => {
    if (formState.seats === 1) return 29
    return 29 + (formState.seats - 1) * 20
  }

  const getPlanName = () => {
    if (formState.seats === 1) return "Solo"
    if (formState.seats <= 4) return "Duo/Family"
    if (formState.seats <= 10) return "Small Team"
    return "Community"
  }

  const validateForm = () => {
    const errors = {
      name: formState.name.trim() ? "" : "Full name is required",
      email: formState.email.trim() ? "" : "Email is required",
      card: cardValid ? "" : "Valid card details are required"
    }
    
    // Additional email validation
    if (formState.email.trim() && !/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    setFormErrors(errors)
    
    return !errors.name && !errors.email && !errors.card
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm() || !stripe || !elements) {
      return
    }

    setIsSubmitting(true)

    try {
      // First, create the pledge on your backend
      const response = await fetch('/api/pledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formState.name,
          email: formState.email,
          seats: formState.seats,
        }),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to create pledge')
      }

      // Get the card element
      const cardElement = elements.getElement('card')
      if (!cardElement) {
        throw new Error('Card element not found')
      }

      // Confirm the SetupIntent with the payment method
      const { setupIntent, error: stripeError } = await stripe.confirmCardSetup(
        result.client_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: formState.name,
              email: formState.email,
            },
          },
        }
      )

      // Check for Stripe errors first
      if (stripeError) {
        throw new Error(stripeError.message || 'Payment setup failed')
      }

      // Now check if setupIntent exists
      if (!setupIntent) {
        throw new Error('Failed to create setup intent')
      }

      console.log("Stripe response:", { setupIntent })

      // Prepare update data with proper type handling
      const updateData: any = {
        stripe_setup_intent_id: setupIntent.id,
        is_charged: false,
        payment_method_types: setupIntent.payment_method_types,
      }

      // Handle payment_method (can be string or object)
      if (setupIntent.payment_method) {
        updateData.stripe_payment_method_id = typeof setupIntent.payment_method === 'string' 
          ? setupIntent.payment_method 
          : setupIntent.payment_method.id
      }

      // Safely handle payment_method_configuration_details if it exists
      if (setupIntent.payment_method_configuration_details) {
        updateData.payment_method_configuration_id = setupIntent.payment_method_configuration_details.id
      }

      const { data: pledge_data, error: pledge_error } = await supabase.from('pledges')
        .update(updateData)
        .eq('id', result.pledge_id)

      console.log("Pledge update response:", { pledge_data, pledge_error })
      
      if (pledge_error) {
        throw new Error(pledge_error.message || 'Failed to update pledge with payment method')
      }

      
      // Redirect to success page with pledge details
      router.push(`/founder/success?pledge_id=${result.pledge_id}&customer_id=${result.customer_id || ''}&total_seats=${result.total_seats || 0}`)

    } catch (error) {
      console.error("Submission error:", error)
      
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      
      // Special handling for Stripe errors
      if (errorMessage.includes("card number")) {
        setFormErrors(prev => ({
          ...prev,
          card: "Please check your card details and try again"
        }))
      } else {
        alert(`Error: ${errorMessage}. Please try again or contact support if the problem persists.`)
      }
      
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Healthiphi</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="h-16 w-16 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
            Become a Healthiphi Founder
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reserve your seats and help us reach our goal of 400 pledges to launch Iceland's health revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seat Selection */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                Configure Your Founder Pass
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium text-slate-200">Number of Seats</span>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={1}
                      max={20}
                      value={formState.seats}
                      onChange={handleSeatsInputChange}
                      className="w-16 bg-slate-700/50 border-slate-600 text-white focus:border-blue-400"
                    />
                    <Badge 
                      variant="outline" 
                      className="border-blue-400/50 text-blue-300 bg-blue-900/30"
                    >
                      {getPlanName()}
                    </Badge>
                  </div>
                </div>
                <Slider
                  value={[formState.seats]}
                  min={1}
                  max={20}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-slate-400">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-900/40 to-slate-800/40 rounded-xl border border-blue-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-200">Monthly Total</span>
                  <span className="font-bold text-3xl text-blue-300">€{getPrice()}</span>
                </div>
                <p className="text-sm text-slate-400">
                  VAT included · Price locked for life · Cancel anytime before activation
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-white flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Founder Benefits Include:
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start text-slate-300">
                    <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                    <span>Founder badge & 15% lifetime discount</span>
                  </li>
                  {formState.seats >= 5 && (
                    <li className="flex items-start text-slate-300 animate-fade-in">
                      <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                      <span>Private onboarding webinar for your group</span>
                    </li>
                  )}
                  {formState.seats >= 10 && (
                    <li className="flex items-start text-slate-300 animate-fade-in">
                      <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                      <span>Invite to our Blue Lagoon Longevity Day</span>
                    </li>
                  )}
                  {formState.seats >= 15 && (
                    <li className="flex items-start text-slate-300 animate-fade-in">
                      <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                      <span>Name engraved on our launch wall & future clinic app</span>
                    </li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Signup Form */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Reserve Your Founder Pass
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-200 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formState.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className={`text-lg bg-slate-700/50 border ${
                        formErrors.name 
                          ? "border-red-500" 
                          : "border-slate-600 focus:border-blue-400"
                      } text-white placeholder:text-slate-400 focus:ring-blue-400/20`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-sm text-red-400 mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className={`text-lg bg-slate-700/50 border ${
                        formErrors.email 
                          ? "border-red-500" 
                          : "border-slate-600 focus:border-blue-400"
                      } text-white placeholder:text-slate-400 focus:ring-blue-400/20`}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-400 mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card" className="text-slate-200 font-medium">
                      Payment Method *
                    </Label>
                    <CardElementstrip onCardChange={handleCardChange} />
                    <p className="text-sm text-slate-400 mt-2">
                      Your card will be securely saved but not charged until we reach 400 pledges.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/20">
                  <h4 className="font-medium mb-3 text-white flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    Zero-Risk Guarantee
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Card saved now, never charged until 400 pledges reached
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      7-day email notice before any charges
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Automatic refund if we don't reach our goal
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !stripeReady}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Processing Your Pledge...
                    </span>
                  ) : (
                    `Reserve ${formState.seats} Seat${formState.seats > 1 ? "s" : ""} - €${getPrice()}/month`
                  )}
                </Button>

                <p className="text-xs text-center text-slate-400">
                  By pledging, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Main component wrapped with Elements provider
export function FounderSignupForm() {
  return (
    <Elements stripe={stripePromise}>
      <FounderSignupFormInner />
    </Elements>
  )
}