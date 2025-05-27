"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
        </div>

        {/* Our Purpose */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.purpose.title")}</h2>
            <p className="text-lg leading-relaxed">{t("about.purpose.description")}</p>
          </CardContent>
        </Card>

        {/* Why We're Building Healthiphi */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.why.title")}</h2>
            <p className="text-lg leading-relaxed">{t("about.why.description")}</p>
          </CardContent>
        </Card>

        {/* How Healthiphi Works */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.how.title")}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-4 pr-6 font-semibold text-lg">{t("about.how.table.deliver")}</th>
                    <th className="text-left py-4 font-semibold text-lg">{t("about.how.table.helps")}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6">
                      <strong className="text-foreground">{t("about.how.phi.title")}</strong> —{" "}
                      {t("about.how.phi.description")}
                    </td>
                    <td className="py-4">{t("about.how.phi.benefit")}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6">
                      <strong className="text-foreground">{t("about.how.coaching.title")}</strong> —{" "}
                      {t("about.how.coaching.description")}
                    </td>
                    <td className="py-4">{t("about.how.coaching.benefit")}</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">
                      <strong className="text-foreground">{t("about.how.marketplace.title")}</strong> —{" "}
                      {t("about.how.marketplace.description")}
                    </td>
                    <td className="py-4">{t("about.how.marketplace.benefit")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">{t("about.how.platform")}</p>
          </CardContent>
        </Card>

        {/* Go-to-Market Strategy */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.strategy.title")}</h2>
            <h3 className="text-xl font-semibold mb-4">{t("about.strategy.subtitle")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <strong className="text-foreground">{t("about.strategy.hq.title")}</strong> —{" "}
                  {t("about.strategy.hq.description")}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <strong className="text-foreground">{t("about.strategy.operators.title")}</strong> —{" "}
                  {t("about.strategy.operators.description")}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <div>
                  <strong className="text-foreground">{t("about.strategy.dtc.title")}</strong> —{" "}
                  {t("about.strategy.dtc.description")}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <div>
                  <strong className="text-foreground">{t("about.strategy.telehealth.title")}</strong> —{" "}
                  {t("about.strategy.telehealth.description")}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 italic">{t("about.strategy.conclusion")}</p>
          </CardContent>
        </Card>

        {/* What Sets Us Apart */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.apart.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("about.apart.prevention.title")}</h4>
                  <p className="text-muted-foreground">{t("about.apart.prevention.description")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("about.apart.humans.title")}</h4>
                  <p className="text-muted-foreground">{t("about.apart.humans.description")}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("about.apart.evidence.title")}</h4>
                  <p className="text-muted-foreground">{t("about.apart.evidence.description")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("about.apart.data.title")}</h4>
                  <p className="text-muted-foreground">{t("about.apart.data.description")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.leadership.title")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{t("about.leadership.petur.name")}</h3>
                <p className="text-muted-foreground">{t("about.leadership.petur.description")}</p>
              </div>
              <p className="text-sm text-muted-foreground italic">{t("about.leadership.team")}</p>
            </div>
          </CardContent>
        </Card>

        {/* Invitation */}
        <Card className="bg-blue-50">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">{t("about.invitation.title")}</h2>
            <p className="text-lg leading-relaxed mb-6">{t("about.invitation.description")}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>{t("about.invitation.territory.title")}</strong> {t("about.invitation.territory.description")}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>{t("about.invitation.clinical.title")}</strong> {t("about.invitation.clinical.description")}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>{t("about.invitation.founder.title")}</strong> {t("about.invitation.founder.description")}
                </span>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">{t("about.invitation.conclusion")}</p>

            <div className="text-center">
              <p className="text-lg font-medium mb-4">
                <strong>{t("about.invitation.contact.title")}</strong>{" "}
                <a href="mailto:hello@healthiphi.com" className="text-blue-600 hover:underline">
                  hello@healthiphi.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground italic">{t("about.invitation.location")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
