"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function MiniManifesto() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary floating orbs with enhanced glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute top-32 right-16 w-[32rem] h-[32rem] bg-gradient-to-bl from-purple-500/25 via-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute bottom-16 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-2000 opacity-65"></div>
        <div className="absolute bottom-32 right-1/3 w-72 h-72 bg-gradient-to-tl from-pink-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-3000 opacity-50"></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Enhanced grid pattern with depth */}
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:60px_60px]"></div>
        </div>
        <div className="absolute inset-0 opacity-8">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(99,102,241,0.3)_1px,_transparent_0)] bg-[length:120px_120px]"></div>
        </div>
        
        {/* Dynamic gradient lines with stagger */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        <div className="absolute top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent animate-pulse delay-1500"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-emerald-400/60 rounded-full animate-ping delay-4000"></div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content Container with Full Padding */}
        <div className="flex-1 w-full px-8 py-20 lg:py-32">
          <div className="w-full">
            {/* Enhanced Title Section */}
            <div className="text-center mb-24 lg:mb-32 space-y-8 px-4">
              <div className="inline-block relative">
                {/* Title glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-purple-400/20 blur-2xl rounded-2xl"></div>
                <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent animate-pulse leading-tight">
                  {t("manifesto.title")}
                </h1>
                <div className="relative mt-6">
                  <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"></div>
                  <div className="absolute top-0 left-0 h-2 w-1/3 bg-gradient-to-r from-white/50 to-transparent rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                The future of innovation across four transformative pillars
              </p>
            </div>

            {/* Enhanced Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 mb-24 lg:mb-32 px-4 lg:px-12">
              {/* Health Pillar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-green-500/20 to-teal-500/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/70 via-emerald-400/30 to-transparent"></div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-500">
                    {t("manifesto.health")}
                  </h3>
                  <div className="space-y-3">
                    <div className="h-px w-full bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
                    <div className="h-px w-3/4 bg-gradient-to-r from-emerald-400/40 to-transparent"></div>
                    <div className="h-px w-1/2 bg-gradient-to-r from-emerald-400/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* AI Pillar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-cyan-500/20 to-indigo-500/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-300 shadow-lg shadow-cyan-400/50"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-30 delay-300"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/70 via-cyan-400/30 to-transparent"></div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500">
                    {t("manifesto.ai")}
                  </h3>
                  <div className="space-y-3">
                    <div className="h-px w-full bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
                    <div className="h-px w-3/4 bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
                    <div className="h-px w-1/2 bg-gradient-to-r from-cyan-400/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Data Pillar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-indigo-500/20 to-pink-500/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/50"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30 delay-500"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/70 via-purple-400/30 to-transparent"></div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-500">
                    {t("manifesto.data")}
                  </h3>
                  <div className="space-y-3">
                    <div className="h-px w-full bg-gradient-to-r from-purple-400/60 to-transparent"></div>
                    <div className="h-px w-3/4 bg-gradient-to-r from-purple-400/40 to-transparent"></div>
                    <div className="h-px w-1/2 bg-gradient-to-r from-purple-400/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Iceland Pillar */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-teal-500/20 to-blue-500/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse delay-700 shadow-lg shadow-teal-400/50"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-30 delay-700"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-teal-400/70 via-teal-400/30 to-transparent"></div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-500">
                    {t("manifesto.iceland")}
                  </h3>
                  <div className="space-y-3">
                    <div className="h-px w-full bg-gradient-to-r from-teal-400/60 to-transparent"></div>
                    <div className="h-px w-3/4 bg-gradient-to-r from-teal-400/40 to-transparent"></div>
                    <div className="h-px w-1/2 bg-gradient-to-r from-teal-400/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="text-center space-y-16 px-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent h-px top-1/2 transform -translate-y-1/2 blur-sm"></div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-12 inline-block">
                  {t("manifesto.join")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 justify-center items-center">
                {/* Back to Launch Button */}
                <Link href="/founder" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 group-hover:blur-xl transition-all duration-500"></div>
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white border-0 px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:-rotate-1"
                  >
                    <span className="flex items-center space-x-3">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>{t("manifesto.backLaunch")}</span>
                    </span>
                  </Button>
                </Link>

                {/* Join Team Button */}
                <Link href="/apply" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 group-hover:blur-xl transition-all duration-500"></div>
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white border-0 px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1"
                  >
                    <span className="flex items-center space-x-3">
                      <span>{t("manifesto.joinTeam")}</span>
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Effects */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"></div>
          <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}