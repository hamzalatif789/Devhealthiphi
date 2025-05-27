"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { CardElement } from "./card-element"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Star, Shield, Users, Crown } from "lucide-react"

export function FounderSignupForm() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    seats: 1,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | number) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
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

  const isFormValid = () => {
    return formState.name.trim() && formState.email.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsSubmitting(true)

    try {
      // In production, this would:
      // 1. Create a Stripe Setup Intent to vault the payment method
      // 2. Store the pledge in your database with status "pending"
      // 3. Send confirmation email
      // 4. Track analytics

      console.log("Founder pledge submitted:", {
        ...formState,
        monthlyAmount: getPrice(),
        planType: getPlanName(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to success page
      window.location.href = "/founder/success"
    } catch (error) {
      console.error("Submission error:", error)
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
                      className="text-lg bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      placeholder="Enter your full name"
                    />
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
                      className="text-lg bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card" className="text-slate-200 font-medium">
                      Payment Method
                    </Label>
                    <div className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg">
                      <CardElement />
                    </div>
                    <p className="text-sm text-slate-400">
                      Your card will be securely vaulted but not charged until we reach 400 pledges.
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
                      Card vaulted now, never charged until 400 pledges reached
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
                  disabled={!isFormValid() || isSubmitting}
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