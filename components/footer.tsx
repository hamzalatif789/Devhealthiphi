"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function Footer() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLinkClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" suppressHydrationWarning>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-20 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float delay-700 opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-float delay-1400 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-float delay-2100 opacity-60"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Main Footer Content */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            {/* Company Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {t("header.logo") || "Healthiphi"}
                </h3>
                <div className="flex items-center space-x-2 text-cyan-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg font-medium">Reykjavík, Iceland</span>
                </div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                {t("footer.tagline") || "Transforming healthcare through innovative technology and compassionate care."}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="group p-3 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-xl transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                {t("footer.links") || "Quick Links"}
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center text-white/70 hover:text-white transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t("footer.privacy") || "Privacy Policy"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center text-white/70 hover:text-white transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t("footer.terms") || "Terms of Service"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="group flex items-center text-white/70 hover:text-white transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t("footer.about") || "About Us"}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                {t("footer.contact") || "Get In Touch"}
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:careers@healthiphi.com" 
                    className="group flex items-center p-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.1" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Careers</p>
                      <p className="text-white/60 text-sm">careers@healthiphi.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:investors@healthiphi.com" 
                    className="group flex items-center p-3 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Investors</p>
                      <p className="text-white/60 text-sm">investors@healthiphi.com</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Border with Copyright */}
          <div className={`relative mt-16 pt-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            {/* Animated Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-center md:text-left">
                © {new Date().getFullYear()} Healthiphi. {t("footer.copyright") || "All rights reserved."}
              </p>
              
              {/* Scroll to Top Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </footer>
  )
}