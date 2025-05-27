"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {t("privacy.title")}
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-full opacity-50" />
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("privacy.subtitle")}
          </p>
          <p className="text-sm text-slate-400 mt-4 font-medium">
            {t("privacy.lastUpdated")}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.intro.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t("privacy.intro.description1")}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t("privacy.intro.description2")}
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.collect.title")}
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600/30">
                  <h3 className="text-lg font-semibold mb-3 text-blue-300 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {t("privacy.collect.personal.title")}
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.personal.item1")}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.personal.item2")}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.personal.item3")}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.personal.item4")}
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600/30">
                  <h3 className="text-lg font-semibold mb-3 text-purple-300 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {t("privacy.collect.usage.title")}
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.usage.item1")}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.usage.item2")}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {t("privacy.collect.usage.item3")}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.use.title")}
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.use.item1")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.use.item2")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.use.item3")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.use.item4")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.use.item5")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.sharing.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("privacy.sharing.description")}
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.sharing.item1")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.sharing.item2")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.sharing.item3")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.sharing.item4")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.security.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("privacy.security.description")}
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.security.item1")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.security.item2")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.security.item3")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.rights.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("privacy.rights.description")}
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.rights.item1")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.rights.item2")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.rights.item3")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.rights.item4")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("privacy.rights.item5")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.cookies.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {t("privacy.cookies.description")}
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 backdrop-blur-sm hover:from-blue-900/60 hover:to-purple-900/60 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50" />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                {t("privacy.contact.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("privacy.contact.description")}
              </p>
              <div className="space-y-3 bg-slate-800/30 p-6 rounded-lg border border-slate-600/30">
                <p className="font-semibold text-white text-lg">Healthiphi ehf.</p>
                <p className="text-slate-300">Reykjavík, Iceland</p>
                <p className="text-slate-300">
                  Email:{" "}
                  <a 
                    href="mailto:privacy@healthiphi.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline"
                  >
                    privacy@healthiphi.com
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