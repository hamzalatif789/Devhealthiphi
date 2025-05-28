"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function ProgressBand() {
  const { t } = useLanguage()
  const [progress, setProgress] = useState(0)
  const [displayProgress, setDisplayProgress] = useState(90)
  const [label, setLabel] = useState("Ignition Ready")

  useEffect(() => {
    if (displayProgress < 25) {
      setLabel(t("progress.warming"))
    } else if (displayProgress < 50) {
      setLabel(t("progress.ignition"))
    } else if (displayProgress < 75) {
      setLabel(t("progress.forming"))
    } else {
      setLabel(t("progress.imminent"))
    }
  }, [displayProgress, t])

  // Animate progress on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(displayProgress)
    }, 500)
    return () => clearTimeout(timer)
  }, [displayProgress])

  const circumference = 2 * Math.PI * 46
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(56,189,248,0.1),transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.1),transparent_50%)] opacity-40" />
      </div>

      <div className="relative container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-sm font-semibold rounded-full shadow-lg">
                🚀 Progress Tracker
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Progress Dial:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {label} — {displayProgress}%
              </span>
            </h3>
          </div>

          {/* Progress Circle */}
          <div className="relative mb-8">
            <div className="relative w-72 h-72 group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-110"></div>
              
              {/* Background ring */}
              <div className="absolute inset-4 rounded-full bg-slate-800/80 backdrop-blur-sm shadow-2xl border border-slate-700/50"></div>
              
              {/* Progress SVG */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="3"
                />
                
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="6"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-2000 ease-out"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.5))'
                  }}
                />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  {displayProgress}%
                </div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {label.split(' ')[0]}
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="relative">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full flex items-center justify-center text-blue-300 font-bold text-sm mr-3">
                    🎯
                  </div>
                  <h4 className="font-semibold text-white">Referral Rewards</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Share your unique link after checkout—every successful referral credits{" "}
                  <strong className="text-blue-400">one free month</strong> to both you{" "}
                  <em>and</em> your friend.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="relative">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-300 font-bold text-sm mr-3">
                    ⚡
                  </div>
                  <h4 className="font-semibold text-white">Growing Impact</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  More seats, more momentum, more healthy years for Iceland.{" "}
                  <strong className="text-cyan-400">How many will you spark?</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-slate-300 font-medium">Current Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <span className="text-slate-500 font-medium">Remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}