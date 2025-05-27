"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("privacy.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("privacy.subtitle")}</p>
          <p className="text-sm text-muted-foreground mt-4">{t("privacy.lastUpdated")}</p>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.intro.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.intro.description1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("privacy.intro.description2")}</p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.collect.title")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("privacy.collect.personal.title")}</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>{t("privacy.collect.personal.item1")}</li>
                    <li>{t("privacy.collect.personal.item2")}</li>
                    <li>{t("privacy.collect.personal.item3")}</li>
                    <li>{t("privacy.collect.personal.item4")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("privacy.collect.usage.title")}</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>{t("privacy.collect.usage.item1")}</li>
                    <li>{t("privacy.collect.usage.item2")}</li>
                    <li>{t("privacy.collect.usage.item3")}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.use.title")}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("privacy.use.item1")}</li>
                <li>{t("privacy.use.item2")}</li>
                <li>{t("privacy.use.item3")}</li>
                <li>{t("privacy.use.item4")}</li>
                <li>{t("privacy.use.item5")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.sharing.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.sharing.description")}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("privacy.sharing.item1")}</li>
                <li>{t("privacy.sharing.item2")}</li>
                <li>{t("privacy.sharing.item3")}</li>
                <li>{t("privacy.sharing.item4")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.security.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.security.description")}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("privacy.security.item1")}</li>
                <li>{t("privacy.security.item2")}</li>
                <li>{t("privacy.security.item3")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.rights.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.rights.description")}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("privacy.rights.item1")}</li>
                <li>{t("privacy.rights.item2")}</li>
                <li>{t("privacy.rights.item3")}</li>
                <li>{t("privacy.rights.item4")}</li>
                <li>{t("privacy.rights.item5")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.cookies.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("privacy.cookies.description")}</p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("privacy.contact.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.contact.description")}</p>
              <div className="space-y-2">
                <p className="font-medium">Healthiphi ehf.</p>
                <p className="text-muted-foreground">Reykjavík, Iceland</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:privacy@healthiphi.com" className="text-blue-600 hover:underline">
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
