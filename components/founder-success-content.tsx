"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Share2, Users, Crown, Copy, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function FounderSuccessContent() {
  const [copied, setCopied] = useState(false)
  const referralLink = `https://healthiphi.com/?ref=founder-${Math.random().toString(36).substr(2, 8)}`

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join me as a Healthiphi Founder",
        text: "I just became a Healthiphi Founder! Join me in adding 10 healthy years to Iceland.",
        url: window.location.origin,
      })
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.origin)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl overflow-hidden">
          <CardHeader className="pb-6 text-center relative">
            {/* Animated background sparkles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-20 right-16 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-80 delay-1000"></div>
              <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-70 delay-500"></div>
            </div>
            
            <div className="relative">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-20 animate-pulse"></div>
                <CheckCircle className="h-12 w-12 text-green-400 relative z-10 animate-bounce" />
              </div>
              
              <div className="flex justify-center items-center gap-2 mb-4">
                <Crown className="h-8 w-8 text-yellow-400 animate-pulse" />
                <CardTitle className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-300 to-green-400 bg-clip-text text-transparent">
                  Welcome, Founder!
                </CardTitle>
                <Crown className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
              
              <p className="text-xl text-slate-300 font-medium">
                Your pledge has been successfully submitted
              </p>
              
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-900/30 rounded-full border border-green-500/30">
                  <Sparkles className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 text-sm font-medium">Founder Status Activated</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 p-8">
            <div className="space-y-6">
              <p className="text-lg text-slate-200 leading-relaxed text-center">
                Thank you for becoming a <span className="font-bold text-blue-300">Healthiphi Founder</span>! 
                You're now part of an exclusive group working to add 10 healthy years to Iceland.
              </p>
              
              <div className="p-6 bg-gradient-to-r from-blue-900/40 to-slate-800/40 rounded-xl border border-blue-500/20">
                <p className="font-semibold text-blue-300 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What happens next?
                </p>
                <div className="space-y-4">
                  {[
                    "Your payment method is securely vaulted (no charges yet)",
                    "You'll receive a confirmation email with your founder details", 
                    "We'll notify you when we reach 400 pledges (7 days before charging)",
                    "Launch day: Welcome to the future of healthcare!"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-xl text-white mb-2 flex items-center justify-center gap-2">
                  <Users className="h-6 w-6 text-blue-400" />
                  Help Us Reach 400 Pledges Faster
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Share your unique referral link and earn <span className="font-bold text-green-400">one free month</span> for every successful referral
                  <br />
                  <span className="text-blue-300">(they get one too!)</span>
                </p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-slate-300">Your Referral Link:</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-3 bg-slate-900/50 rounded-lg font-mono text-sm text-blue-300 border border-slate-600">
                    {referralLink}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyLink}
                    className="bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:text-white"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Homepage
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-blue-500" 
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share with Friends
              </Button>
            </div>

            <div className="text-center pt-6 border-t border-slate-700">
              <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Questions? Email us at{" "}
                <a 
                  href="mailto:founders@healthiphi.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/50 hover:decoration-blue-300"
                >
                  founders@healthiphi.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}