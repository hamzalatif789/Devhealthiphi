"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function AboutContent() {
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

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 leading-tight">
            {t("about.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Our Purpose */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
              {t("about.purpose.title")}
            </h2>
            <p className="text-xl leading-relaxed text-blue-100/90">{t("about.purpose.description")}</p>
          </CardContent>
        </Card>

        {/* Why We're Building Healthiphi */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></span>
              {t("about.why.title")}
            </h2>
            <p className="text-xl leading-relaxed text-blue-100/90">{t("about.why.description")}</p>
          </CardContent>
        </Card>

        {/* How Healthiphi Works */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4"></span>
              {t("about.how.title")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-blue-400/30">
                    <th className="text-left py-6 pr-8 font-bold text-xl text-blue-100">{t("about.how.table.deliver")}</th>
                    <th className="text-left py-6 font-bold text-xl text-blue-100">{t("about.how.table.helps")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-6 pr-8">
                      <strong className="text-cyan-300 text-lg">{t("about.how.phi.title")}</strong>
                      <span className="text-blue-100/80"> — {t("about.how.phi.description")}</span>
                    </td>
                    <td className="py-6 text-blue-100/80">{t("about.how.phi.benefit")}</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-6 pr-8">
                      <strong className="text-cyan-300 text-lg">{t("about.how.coaching.title")}</strong>
                      <span className="text-blue-100/80"> — {t("about.how.coaching.description")}</span>
                    </td>
                    <td className="py-6 text-blue-100/80">{t("about.how.coaching.benefit")}</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 pr-8">
                      <strong className="text-cyan-300 text-lg">{t("about.how.marketplace.title")}</strong>
                      <span className="text-blue-100/80"> — {t("about.how.marketplace.description")}</span>
                    </td>
                    <td className="py-6 text-blue-100/80">{t("about.how.marketplace.benefit")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-blue-200/60 mt-8 italic bg-white/5 p-4 rounded-lg border-l-4 border-blue-400">
              {t("about.how.platform")}
            </p>
          </CardContent>
        </Card>

        {/* Go-to-Market Strategy */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '800ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
              {t("about.strategy.title")}
            </h2>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-300">{t("about.strategy.subtitle")}</h3>
            <div className="space-y-6">
              {[
                { title: t("about.strategy.hq.title"), description: t("about.strategy.hq.description") },
                { title: t("about.strategy.operators.title"), description: t("about.strategy.operators.description") },
                { title: t("about.strategy.dtc.title"), description: t("about.strategy.dtc.description") },
                { title: t("about.strategy.telehealth.title"), description: t("about.strategy.telehealth.description") }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <div>
                    <strong className="text-cyan-300 text-lg">{item.title}</strong>
                    <span className="text-blue-100/80"> — {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-blue-200/70 mt-8 italic bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400">
              {t("about.strategy.conclusion")}
            </p>
          </CardContent>
        </Card>

        {/* What Sets Us Apart */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1000ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></span>
              {t("about.apart.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { title: t("about.apart.prevention.title"), description: t("about.apart.prevention.description") },
                  { title: t("about.apart.humans.title"), description: t("about.apart.humans.description") }
                ].map((item, index) => (
                  <div key={index} className="group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                    <h4 className="font-bold text-xl mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-blue-100/80 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { title: t("about.apart.evidence.title"), description: t("about.apart.evidence.description") },
                  { title: t("about.apart.data.title"), description: t("about.apart.data.description") }
                ].map((item, index) => (
                  <div key={index} className="group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                    <h4 className="font-bold text-xl mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-blue-100/80 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className={`mb-16 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1200ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-4"></span>
              {t("about.leadership.title")}
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">{t("about.leadership.petur.name")}</h3>
                <p className="text-blue-100/80 text-lg leading-relaxed">{t("about.leadership.petur.description")}</p>
              </div>
              <p className="text-sm text-blue-200/60 italic bg-white/5 p-4 rounded-lg">
                {t("about.leadership.team")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Invitation */}
        <Card className={`bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border-white/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1400ms'}}>
          <CardContent className="p-10">
            <h2 className="text-4xl font-bold mb-8 text-white flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></span>
              {t("about.invitation.title")}
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-blue-100/90">{t("about.invitation.description")}</p>

            <div className="space-y-4 mb-8">
              {[
                { title: t("about.invitation.territory.title"), description: t("about.invitation.territory.description") },
                { title: t("about.invitation.clinical.title"), description: t("about.invitation.clinical.description") },
                { title: t("about.invitation.founder.title"), description: t("about.invitation.founder.description") }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 font-bold text-xl group-hover:scale-125 transition-transform">•</span>
                  <span className="text-blue-100/80">
                    <strong className="text-cyan-300">{item.title}</strong> {item.description}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed mb-8 text-blue-100/90">{t("about.invitation.conclusion")}</p>

            <div className="text-center bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <p className="text-xl font-medium mb-4 text-white">
                <strong>{t("about.invitation.contact.title")}</strong>{" "}
                <a 
                  href="mailto:hello@healthiphi.com" 
                  className="text-cyan-300 hover:text-cyan-200 transition-colors hover:underline decoration-2 underline-offset-4"
                >
                  hello@healthiphi.com
                </a>
              </p>
              <p className="text-sm text-blue-200/70 italic">{t("about.invitation.location")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}