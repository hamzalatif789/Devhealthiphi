"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { motion } from "framer-motion"

export function FounderPassSection() {
  const { t } = useLanguage()
  const [seats, setSeats] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleSliderChange = (value: number[]) => {
    setSeats(value[0])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 1 && value <= 20) {
      setSeats(value)
    }
  }

  const getPrice = () => {
    if (seats === 1) return 29
    return 29 + (seats - 1) * 20
  }

  const getPlanName = () => {
    if (seats === 1) return "Solo"
    if (seats <= 4) return "Duo/Family"
    if (seats <= 10) return "Small Team"
    return "Community"
  }

  const getPlanGradient = () => {
    if (seats === 1) return "from-blue-500 to-cyan-500"
    if (seats <= 4) return "from-purple-500 to-pink-500"
    if (seats <= 10) return "from-emerald-500 to-teal-500"
    return "from-orange-500 to-red-500"
  }

  const rewards = [
    {
      id: 1,
      title: t("founder.badge") || "Founder Badge",
      icon: "🏆",
      minSeats: 1,
      description: "Exclusive founder status recognition"
    },
    {
      id: 2,
      title: t("founder.webinar") || "Private Webinar",
      icon: "🎯",
      minSeats: 5,
      description: "Access to exclusive founder webinars"
    },
    {
      id: 3,
      title: t("founder.blueLagoon") || "Blue Lagoon Access",
      icon: "🌊",
      minSeats: 10,
      description: "Premium Blue Lagoon experience"
    },
    {
      id: 4,
      title: t("founder.engraved") || "Engraved Plaque",
      icon: "⭐",
      minSeats: 15,
      description: "Personalized recognition plaque"
    }
  ]

  const riskFreeItems = [
    {
      title: t("founder.cardVaulted") || "Card details securely vaulted",
      icon: "🔒"
    },
    {
      title: t("founder.sevenDay") || "7-day money back guarantee",
      icon: "💰"
    },
    {
      title: t("founder.failSafe") || "Full refund fail-safe protection",
      icon: "🛡️"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Interactive Glow */}
        <div 
          className="absolute w-96 h-96 bg-blue-400/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-sm font-semibold text-white/90">
              🎯 {t("founder.badge") || "Limited Founder Pass"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            {t("founder.title") || "Founder Pass"}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            {t("founder.subtitle") || "Join the exclusive founder community and shape the future together"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Seat Selection Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <span className="mr-3 text-2xl">🎯</span>
                  {t("founder.pickSeats") || "Pick Your Seats"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Seat Selection */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/90 font-medium">{t("founder.seats") || "Seats"}</span>
                    <div className="flex items-center space-x-3">
                      <Input
                        type="number"
                        min={1}
                        max={20}
                        value={seats}
                        onChange={handleInputChange}
                        className="w-20 bg-white/10 border-white/20 text-white text-center font-bold"
                      />
                      <Badge 
                        className={`bg-gradient-to-r ${getPlanGradient()} text-white font-semibold px-3 py-1 animate-pulse`}
                      >
                        {getPlanName()}
                      </Badge>
                    </div>
                  </div>

                  {/* Custom Slider */}
                  <div className="relative">
                    <Slider 
                      value={[seats]} 
                      min={1} 
                      max={20} 
                      step={1} 
                      onValueChange={handleSliderChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-2">
                      {[1, 5, 10, 15, 20].map(num => (
                        <span key={num} className={seats === num ? "text-cyan-400 font-bold" : ""}>
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <motion.div 
                  className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10 backdrop-blur-sm"
                  // animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white/90">{t("founder.totalMonthly") || "Total Monthly"}</span>
                    <span className="font-black text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      €{getPrice()}
                    </span>
                  </div>
                  <p className="text-sm text-white/60">{t("founder.vatIncluded") || "VAT included"}</p>
                </motion.div>

                {/* Target Audience */}
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold mb-3 text-white flex items-center">
                    <span className="mr-2">👥</span>
                    {t("founder.whoFits") || "Who This Fits"}
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {seats === 1 && (t("founder.solo") || "Perfect for individual creators and solo entrepreneurs")}
                    {seats > 1 && seats <= 4 && (t("founder.family") || "Ideal for small families and close-knit teams")}
                    {seats > 4 && seats <= 10 && (t("founder.team") || "Great for growing teams and small businesses")}
                    {seats > 10 && (t("founder.community") || "Perfect for communities and larger organizations")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Rewards Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <span className="mr-3 text-2xl">🎁</span>
                  {t("founder.rewards") || "Exclusive Rewards"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Rewards List */}
                <div className="space-y-4">
                  {rewards.map((reward, index) => (
                    <motion.div
                      key={reward.id}
                      className={`flex items-start p-4 rounded-xl border transition-all duration-300 ${
                        seats >= reward.minSeats 
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30' 
                          : 'bg-white/5 border-white/10 opacity-50'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className={`mr-4 text-2xl flex items-center justify-center w-12 h-12 rounded-full ${
                        seats >= reward.minSeats ? 'bg-green-500/20' : 'bg-white/10'
                      }`}>
                        {seats >= reward.minSeats ? '✓' : reward.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white mb-1">{reward.title}</h5>
                        <p className="text-sm text-white/70">{reward.description}</p>
                        {seats < reward.minSeats && (
                          <p className="text-xs text-yellow-400 mt-1">
                            Unlocks at {reward.minSeats} seats
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Risk-Free Section */}
                <motion.div 
                  className="p-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ delay: 1.2 }}
                >
                  <h4 className="font-bold mb-4 text-white flex items-center">
                    <span className="mr-2 text-xl">🛡️</span>
                    {t("founder.zeroRisk") || "Zero Risk Guarantee"}
                  </h4>
                  <div className="space-y-3">
                    {riskFreeItems.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 mt-0.5 text-lg">
                          {item.icon}
                        </div>
                        <span className="text-white/90 text-sm">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 }}
                >
                  <Button 
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group"
                    asChild
                  >
                    <Link href="/founder" className="flex items-center justify-center">
                      <span className="mr-2">{t("founder.reserveSeats") || "Reserve Your Seats"}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
      `}</style>
    </section>
  )
}