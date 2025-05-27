"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

interface TalentTileProps {
  icon: string
  title: string
  description: string
}

function TalentTile({ icon, title, description }: TalentTileProps) {
  return (
    <Card className="group relative overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/60 backdrop-blur-sm hover:from-slate-800/90 hover:to-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <CardContent className="relative p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-150" />
            <div className="relative text-4xl p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-white shadow-lg group-hover:shadow-xl hover:shadow-blue-400/40 transition-all duration-500">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export function TalentSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.1),transparent_50%)] opacity-40" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-sm font-semibold rounded-full shadow-lg">
              ✨ Join Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
            {t("talent.title")}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("talent.subtitle")}
          </p>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TalentTile
            icon="💻"
            title={t("talent.purpose.title")}
            description={t("talent.purpose.description")}
          />
          <TalentTile
            icon="🎨"
            title={t("talent.ai.title")}
            description={t("talent.ai.description")}
          />
          <TalentTile
            icon="📊"
            title={t("talent.outcome.title")}
            description={t("talent.outcome.description")}
          />
          <TalentTile
            icon="🚀"
            title={t("talent.panel.title")}
            description={t("talent.panel.description")}
          />
          <TalentTile
            icon="🔧"
            title={t("talent.operations.title")}
            description={t("talent.operations.description")}
          />
          <TalentTile
            icon="💡"
            title={t("talent.innovation.title")}
            description={t("talent.innovation.description")}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <Link href="/apply" className="relative block">
              <Button 
                size="lg" 
                className="relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  {t("talent.apply")}
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            Ready to make an impact? Join our innovative team today.
          </p>
        </div>
      </div>
    </section>
  )
}