"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Clock, User, Mail, Briefcase, Target, Heart, Stethoscope, Timer, CheckCircle2, Sparkles, Star, Zap } from "lucide-react"

const professions = [
  "Physician",
  "Nurse", 
  "Health Coach",
  "Physiotherapist",
  "Nutritionist",
  "Mental Health Counselor",
  "Medical Researcher",
  "Healthcare Administrator",
  "Other Healthcare Professional",
]

export default function TalentApplicationForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    profession: "",
    experience: 5,
    motivation: "",
  })

  const [timeLeft, setTimeLeft] = useState(600)
  const [formStarted, setFormStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState("")

  const handleFirstInteraction = () => {
    if (!formStarted) {
      setFormStarted(true)
      console.log("Analytics: form_start")
    }
  }

  useEffect(() => {
    if (!formStarted) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [formStarted])

  const handleInputChange = (field: string, value: string | number) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    handleFirstInteraction()
  }

  const formatTimeLeft = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    if (minutes > 0) {
      return `≈ ${minutes} min left`
    }
    return `≈ ${remainingSeconds} sec left`
  }

  const isFormValid = () => {
    return (
      formState.name.trim() &&
      formState.email.trim() &&
      formState.profession &&
      formState.motivation.trim().length >= 50
    )
  }

  const getCompletionPercentage = () => {
    let completed = 0
    if (formState.name.trim()) completed++
    if (formState.email.trim()) completed++
    if (formState.profession) completed++
    if (formState.motivation.trim().length >= 50) completed++
    return Math.round((completed / 4) * 100)
  }

  const getFieldStatus = (field: string) => {
    switch (field) {
      case 'name':
        return formState.name.trim() ? 'complete' : 'incomplete'
      case 'email':
        return formState.email.trim() ? 'complete' : 'incomplete'
      case 'profession':
        return formState.profession ? 'complete' : 'incomplete'
      case 'motivation':
        return formState.motivation.trim().length >= 50 ? 'complete' : 'incomplete'
      default:
        return 'incomplete'
    }
  }

  const handleSubmit = async () => {
    if (!isFormValid()) return

    setIsSubmitting(true)

    try {
      console.log("Form submitted:", formState)
      console.log("Analytics: form_submit", {
        timeToComplete: 600 - timeLeft,
        profession: formState.profession,
      })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Application submitted successfully! 🎉")
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header with floating effect */}
         

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-sm -z-10"></div>
            
            <CardHeader className="border-b border-slate-700/50 relative bg-gradient-to-r from-slate-800/50 to-slate-900/50">
              {/* Enhanced progress indicator */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-slate-800 rounded-t-lg overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transition-all duration-700 ease-out relative"
                  style={{ width: `${getCompletionPercentage()}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <div className="relative p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                    <Stethoscope className="h-7 w-7 text-blue-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white mb-1">Healthcare Excellence</CardTitle>
                    <p className="text-slate-300 text-sm flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      Be part of something extraordinary
                    </p>
                  </div>
                </div>
                
                {formStarted && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-full border border-slate-600 backdrop-blur-sm">
                    <Timer className="h-4 w-4 text-blue-400 animate-spin" />
                    <span className="text-sm text-slate-300 font-medium">{formatTimeLeft(timeLeft)}</span>
                  </div>
                )}
              </div>

              {/* Completion status */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">Form completion</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 font-medium">{getCompletionPercentage()}%</span>
                  {getCompletionPercentage() === 100 && (
                    <CheckCircle2 className="h-4 w-4 text-green-400 animate-bounce" />
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              <div className="space-y-8">
                {/* Enhanced Name Field */}
                <div className={`space-y-3 transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                  <Label htmlFor="name" className="text-slate-200 font-medium flex items-center gap-2">
                    <div className={`p-1 rounded-lg transition-colors ${getFieldStatus('name') === 'complete' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {getFieldStatus('name') === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    Full Name *
                    {getFieldStatus('name') === 'complete' && <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />}
                  </Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => {setFocusedField('name'); handleFirstInteraction()}}
                    onBlur={() => setFocusedField('')}
                    required
                    className="text-lg h-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-slate-800/70"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Enhanced Email Field */}
                <div className={`space-y-3 transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                  <Label htmlFor="email" className="text-slate-200 font-medium flex items-center gap-2">
                    <div className={`p-1 rounded-lg transition-colors ${getFieldStatus('email') === 'complete' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {getFieldStatus('email') === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                    </div>
                    Email Address *
                    {getFieldStatus('email') === 'complete' && <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => {setFocusedField('email'); handleFirstInteraction()}}
                    onBlur={() => setFocusedField('')}
                    required
                    className="text-lg h-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-slate-800/70"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Enhanced Profession Field */}
                <div className={`space-y-3 transition-all duration-300 ${focusedField === 'profession' ? 'scale-[1.02]' : ''}`}>
                  <Label htmlFor="profession" className="text-slate-200 font-medium flex items-center gap-2">
                    <div className={`p-1 rounded-lg transition-colors ${getFieldStatus('profession') === 'complete' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {getFieldStatus('profession') === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                    </div>
                    Profession *
                    {getFieldStatus('profession') === 'complete' && <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />}
                  </Label>
                  <Select
                    value={formState.profession}
                    onValueChange={(value) => handleInputChange("profession", value)}
                    onOpenChange={() => {setFocusedField('profession'); handleFirstInteraction()}}
                  >
                    <SelectTrigger className="text-lg h-12 bg-slate-800/50 border-slate-600 text-white focus:border-blue-400 hover:bg-slate-800/70 transition-all duration-300">
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      {professions.map((profession) => (
                        <SelectItem 
                          key={profession} 
                          value={profession}
                          className="text-slate-200 focus:bg-slate-700 focus:text-white hover:bg-slate-700/50 transition-colors"
                        >
                          {profession}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-slate-400">Choose the profession that best describes your expertise</p>
                </div>

                {/* Enhanced Experience Slider */}
                <div className="space-y-4">
                  <Label htmlFor="experience" className="text-slate-200 font-medium flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-purple-500/20 text-purple-400">
                      <Target className="h-4 w-4" />
                    </div>
                    Years of Experience *
                  </Label>
                  <div className="px-6 py-6 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-xl border border-slate-600 backdrop-blur-sm hover:border-slate-500 transition-all duration-300">
                    <Slider
                      id="experience"
                      min={0}
                      max={30}
                      step={1}
                      value={[formState.experience]}
                      onValueChange={(value) => handleInputChange("experience", value[0])}
                      onPointerDown={handleFirstInteraction}
                      className="w-full"
                    />
                    <div className="flex justify-between items-center text-sm text-slate-400 mt-4">
                      <span className="font-medium">0 years</span>
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                        <span className="font-bold text-white text-lg">{formState.experience} years</span>
                      </div>
                      <span className="font-medium">30+ years</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Motivation Field */}
                <div className={`space-y-3 transition-all duration-300 ${focusedField === 'motivation' ? 'scale-[1.02]' : ''}`}>
                  <Label htmlFor="motivation" className="text-slate-200 font-medium flex items-center gap-2">
                    <div className={`p-1 rounded-lg transition-colors ${getFieldStatus('motivation') === 'complete' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {getFieldStatus('motivation') === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
                    </div>
                    Why do you want to join Healthiphi? *
                    {getFieldStatus('motivation') === 'complete' && <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />}
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formState.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    onFocus={() => {setFocusedField('motivation'); handleFirstInteraction()}}
                    onBlur={() => setFocusedField('')}
                    required
                    rows={6}
                    className="text-lg resize-none bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-slate-800/70"
                    placeholder="Tell us what motivates you to be part of Iceland's health revolution. Share your vision, passion, and how you'd contribute to our mission of transforming healthcare..."
                  />
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Target className="h-3 w-3" />
                      Minimum 50 characters
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={`transition-colors font-medium ${
                        formState.motivation.length >= 50 
                          ? "text-green-400" 
                          : formState.motivation.length > 0 
                          ? "text-yellow-400" 
                          : "text-slate-400"
                      }`}>
                        {formState.motivation.length}/500
                      </span>
                      {formState.motivation.length >= 50 && (
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    onClick={handleSubmit}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    disabled={!isFormValid() || isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 group-hover:animate-shimmer"></div>
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent"></div>
                        <span>Submitting Application...</span>
                        <Sparkles className="h-5 w-5 animate-pulse" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Stethoscope className="h-6 w-6" />
                        <span>Submit Application</span>
                        <Star className="h-5 w-5 animate-pulse" />
                      </span>
                    )}
                  </Button>
                  
                  {!isFormValid() && (
                    <p className="text-center text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                      <Target className="h-4 w-4 text-yellow-400" />
                      Complete all fields to submit your application
                    </p>
                  )}
                  
                  {isFormValid() && (
                    <p className="text-center text-sm text-green-400 mt-4 flex items-center justify-center gap-2 animate-bounce">
                      <CheckCircle2 className="h-4 w-4" />
                      Ready to submit! 🚀
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced info card */}
          <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Clock className="h-5 w-5 text-blue-400 animate-pulse" />
              <span className="text-center font-medium">
                Application typically takes 5-10 minutes to complete
              </span>
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}