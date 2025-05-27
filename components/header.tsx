"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    // Initialize scroll state after mount
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent server-client mismatch for initial render
  if (!isMounted) return null

  return (
    <header className={`w-full border-b transition-all duration-300 sticky top-0 z-50 ${
      isScrolled 
        ? 'bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md shadow-lg border-slate-700' 
        : 'bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-sm border-slate-600'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-all duration-200 hover:scale-105"
            passHref
          >
            <div className="relative">
              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:rotate-3">
                <span className="text-white font-bold text-lg lg:text-xl">H</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-200"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                {t("header.logo")}
              </span>
              
            </div>
          </Link>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="relative">
              <LanguageSwitcher />
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200">
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Move progress bar to client-side only */}
        {isMounted && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-700 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out"
              style={{ 
                width: isScrolled ? '100%' : `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
                transition: 'width 0.3s ease-out'
              }}
            ></div>
          </div>
        )}
      </div>
    </header>
  )
}