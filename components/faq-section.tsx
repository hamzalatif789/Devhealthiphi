"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, Search, MessageCircle, Star } from "lucide-react"

export function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState(new Set())

  // Mock translation function for demo
  const t = (key: string) => {
    const translations = {
      "faq.title": "Frequently Asked Questions",
      "faq.subtitle": "Everything you need to know about our platform",
      "faq.why400.question": "Why does the assessment cost $400?",
      "faq.why400.answer": "Our comprehensive health assessment includes advanced biomarker analysis, personalized AI-driven insights, and a detailed consultation with healthcare professionals. The cost reflects the extensive laboratory work, expert analysis, and personalized recommendations you receive.",
      "faq.charged.question": "When will I be charged?",
      "faq.charged.answer": "You'll be charged only after your sample is successfully processed and your results are ready. We never charge upfront - payment is processed once we deliver your comprehensive health report and insights.",
      "faq.data.question": "How is my health data protected?",
      "faq.data.answer": "We use bank-level encryption and comply with HIPAA regulations. Your data is stored securely and never shared with third parties without your explicit consent. We follow strict privacy protocols to ensure your health information remains confidential.",
      "faq.different.question": "How is this different from other health platforms?",
      "faq.different.answer": "Our platform combines advanced biomarker testing with AI-powered personalized insights and direct access to healthcare professionals. Unlike generic health apps, we provide actionable, science-backed recommendations tailored specifically to your unique health profile.",
      "faq.cancel.question": "Can I cancel my subscription anytime?",
      "faq.cancel.answer": "Yes, you can cancel your subscription at any time without penalties. Your access will continue until the end of your current billing period, and you'll retain access to your historical health data and reports.",
      "faq.qualifications.question": "What are the qualifications of your healthcare team?",
      "faq.qualifications.answer": "Our team consists of board-certified physicians, registered dietitians, certified health coaches, and data scientists. All healthcare professionals hold relevant certifications and have extensive experience in personalized medicine and preventive care."
    }
    return translations[key] || key
  }

  const faqs = [
    {
      question: t("faq.why400.question"),
      answer: t("faq.why400.answer"),
      category: "Pricing",
      popular: true
    },
    {
      question: t("faq.charged.question"),
      answer: t("faq.charged.answer"),
      category: "Billing",
      popular: false
    },
    {
      question: t("faq.data.question"),
      answer: t("faq.data.answer"),
      category: "Privacy",
      popular: true
    },
    {
      question: t("faq.different.question"),
      answer: t("faq.different.answer"),
      category: "Platform",
      popular: true
    },
    {
      question: t("faq.cancel.question"),
      answer: t("faq.cancel.answer"),
      category: "Subscription",
      popular: false
    },
    {
      question: t("faq.qualifications.question"),
      answer: t("faq.qualifications.answer"),
      category: "Team",
      popular: false
    },
  ]

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(faqs.map(faq => faq.category))]
  const popularFaqs = faqs.filter(faq => faq.popular)

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  // Custom Badge component
  const Badge = ({ children, variant = "default", className = "" }) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
    const variantClasses = {
      default: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      secondary: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      outline: "border-white/30 text-slate-300 bg-white/5"
    }
    return (
      <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        {children}
      </span>
    )
  }

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            {t("faq.subtitle")}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Popular Questions Preview */}
        {searchTerm === "" && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              Most Popular Questions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {popularFaqs.map((faq, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 border-l-4 border-l-blue-400 border border-white/20">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 bg-blue-400/20 text-blue-300 border-blue-400/30">
                      {faq.category}
                    </Badge>
                    <h4 className="font-semibold text-white text-sm leading-tight">
                      {faq.question}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        {searchTerm === "" && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-white/20 hover:border-blue-300 cursor-pointer transition-colors duration-200 border-white/30 text-slate-300 bg-white/5 backdrop-blur-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {/* Main FAQ Accordion */}
        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardContent className="p-8">
            {filteredFaqs.length > 0 ? (
              <div className="w-full space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left font-semibold text-white hover:text-blue-300 transition-colors duration-200 p-6 flex items-start gap-3"
                    >
                      <Badge 
                        variant="secondary" 
                        className="mt-1 bg-blue-400/20 text-blue-300 text-xs flex-shrink-0 border-blue-400/30"
                      >
                        {faq.category}
                      </Badge>
                      <span className="flex-1">{faq.question}</span>
                      {faq.popular && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0 mt-1" />
                      )}
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                          openItems.has(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openItems.has(index) && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-16 text-slate-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-slate-300">Try adjusting your search terms or browse our popular questions above.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-300 mb-6">
                Our support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg">
                  Contact Support
                </button>
                <button className="px-6 py-3 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-400/10 transition-colors duration-200 font-medium backdrop-blur-sm">
                  Live Chat
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}