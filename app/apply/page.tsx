"use client"
import {TalentApplicationForm} from "@/components/talent-application-form"
import Link from "next/link"
import { ArrowLeft, Clock, FileX } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Healthiphi</span>
            </Link>
            
            <Link 
              href="/save-application" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              <FileX className="w-4 h-4" />
              Apply later? Save & exit
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            Now Hiring
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Healthiphi
            </span>{" "}
            Team
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Apply to be part of Iceland's health revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span className="font-medium">Takes just 10 minutes</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            
            <div className="flex items-center gap-2">
              <FileX className="w-5 h-5 text-purple-400" />
              <span className="font-medium">No CV required</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            
            <div className="font-medium">
              Just five quick questions
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl shadow-2xl shadow-indigo-900/20 border border-slate-700/50 overflow-hidden">
          <div className="p-8 lg:p-12">
            <TalentApplicationForm />
          </div>
        </div>
      </main>
    </div>
  )
}