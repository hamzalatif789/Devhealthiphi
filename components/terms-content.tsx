"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function TermsContent() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("terms.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("terms.subtitle")}</p>
          <p className="text-sm text-muted-foreground mt-4">{t("terms.lastUpdated")}</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.intro.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("terms.intro.description1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("terms.intro.description2")}</p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.acceptance.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("terms.acceptance.description")}</p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.services.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("terms.services.description")}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("terms.services.item1")}</li>
                <li>{t("terms.services.item2")}</li>
                <li>{t("terms.services.item3")}</li>
                <li>{t("terms.services.item4")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Obligations */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.obligations.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("terms.obligations.description")}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("terms.obligations.item1")}</li>
                <li>{t("terms.obligations.item2")}</li>
                <li>{t("terms.obligations.item3")}</li>
                <li>{t("terms.obligations.item4")}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.payment.title")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("terms.payment.pledge.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("terms.payment.pledge.description")}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("terms.payment.billing.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("terms.payment.billing.description")}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("terms.payment.refunds.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("terms.payment.refunds.description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.ip.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("terms.ip.description")}</p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.liability.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("terms.liability.description")}</p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.termination.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("terms.termination.description")}</p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.law.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("terms.law.description")}</p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("terms.contact.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("terms.contact.description")}</p>
              <div className="space-y-2">
                <p className="font-medium">Healthiphi ehf.</p>
                <p className="text-muted-foreground">Reykjavík, Iceland</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:legal@healthiphi.com" className="text-blue-600 hover:underline">
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
