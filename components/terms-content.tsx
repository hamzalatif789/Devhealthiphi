"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function TermsContent() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 leading-tight">
            {t("terms.title")}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            {t("terms.subtitle")}
          </p>
          <p className="text-sm text-blue-200/60 bg-white/10 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
            {t("terms.lastUpdated")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                {t("terms.intro.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed mb-4 text-lg">{t("terms.intro.description1")}</p>
              <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.intro.description2")}</p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></span>
                {t("terms.acceptance.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.acceptance.description")}</p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4"></span>
                {t("terms.services.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed mb-6 text-lg">{t("terms.services.description")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  t("terms.services.item1"),
                  t("terms.services.item2"),
                  t("terms.services.item3"),
                  t("terms.services.item4")
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-blue-100/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Obligations */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '500ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
                {t("terms.obligations.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed mb-6 text-lg">{t("terms.obligations.description")}</p>
              <div className="space-y-3">
                {[
                  t("terms.obligations.item1"),
                  t("terms.obligations.item2"),
                  t("terms.obligations.item3"),
                  t("terms.obligations.item4")
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 hover:bg-white/5 p-3 rounded-lg transition-colors">
                    <span className="text-cyan-400 font-bold text-xl">•</span>
                    <span className="text-blue-100/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></span>
                {t("terms.payment.title")}
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">{t("terms.payment.pledge.title")}</h3>
                  <p className="text-blue-100/80 leading-relaxed">{t("terms.payment.pledge.description")}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border-l-4 border-cyan-400">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">{t("terms.payment.billing.title")}</h3>
                  <p className="text-blue-100/80 leading-relaxed">{t("terms.payment.billing.description")}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">{t("terms.payment.refunds.title")}</h3>
                  <p className="text-blue-100/80 leading-relaxed">{t("terms.payment.refunds.description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '700ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-4"></span>
                {t("terms.ip.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.ip.description")}</p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '800ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                {t("terms.liability.title")}
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg">
                <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.liability.description")}</p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '900ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></span>
                {t("terms.termination.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.termination.description")}</p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1000ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4"></span>
                {t("terms.law.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed text-lg">{t("terms.law.description")}</p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className={`bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border-white/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1100ms'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></span>
                {t("terms.contact.title")}
              </h2>
              <p className="text-blue-100/80 leading-relaxed mb-6 text-lg">{t("terms.contact.description")}</p>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm space-y-3">
                <p className="font-bold text-xl text-cyan-300">Healthiphi ehf.</p>
                <p className="text-blue-100/80 text-lg">Reykjavík, Iceland</p>
                <p className="text-blue-100/80 text-lg">
                  Email:{" "}
                  <a 
                    href="mailto:legal@healthiphi.com" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors hover:underline decoration-2 underline-offset-4 font-semibold"
                  >
                    legal@healthiphi.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}