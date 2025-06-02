"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Testimonial {
  quote: string
  name: string
  role: string
  isPatient: boolean
  rating: number
}

const testimonialsData: Testimonial[] = [
  {
    quote: "testimonials.elin",
    name: "Elín",
    role: "Tech Founder",
    isPatient: true,
    rating: 5,
  },
  {
    quote: "testimonials.maria",
    name: "María",
    role: "PHI Coach",
    isPatient: false,
    rating: 5,
  },
  {
    quote: "testimonials.jon",
    name: "Jón",
    role: "Software Engineer",
    isPatient: true,
    rating: 5,
  },
  {
    quote: "testimonials.kristin",
    name: "Kristín",
    role: "Family Physician",
    isPatient: false,
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = useMemo(() => 
    testimonialsData.map(test => ({
      ...test,
      quote: t(test.quote)
    })), [t])

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false)
    action()
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_65%)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real stories from real people who've transformed their health journey
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Quote className="w-12 h-12 text-blue-400 fill-current" />
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl"></div>
                </div>
              </div>

              <div className="text-center">
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-white mb-8 leading-relaxed font-light">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                    {testimonials[currentIndex].isPatient ? "👤" : "👩‍⚕️"}
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">{testimonials[currentIndex].name}</p>
                    <p className="text-blue-300 font-medium">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-2 h-2 rounded-full ${testimonials[currentIndex].isPatient ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                      <span className="text-sm text-slate-400">
                        {testimonials[currentIndex].isPatient ? 'Patient' : 'Healthcare Provider'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={`w-3 h-3 rounded-full p-0 border-0 transition-all duration-500 ${
                    index === currentIndex 
                      ? "bg-blue-400 shadow-lg shadow-blue-400/50 scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-slate-300 text-sm">{t("testimonials.stats.users")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9★</div>
            <div className="text-slate-300 text-sm">{t("testimonials.stats.rating")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-300 text-sm">{t("testimonials.stats.partners")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}