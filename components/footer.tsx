"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const handleLinkClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full py-6 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t("header.logo")}</h3>
            <p className="text-gray-400">Reykjavík, Iceland</p>
            <p className="text-gray-400 mt-4">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:careers@healthiphi.com" className="text-gray-400 hover:text-white transition-colors">
                  careers@healthiphi.com
                </a>
              </li>
              <li>
                <a href="mailto:investors@healthiphi.com" className="text-gray-400 hover:text-white transition-colors">
                  investors@healthiphi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Healthiphi. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
