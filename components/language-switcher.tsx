"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

// Flag components
function IcelandFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 25 18" fill="none">
      <rect width="25" height="18" fill="#0048E0" />
      <rect x="7" y="0" width="3" height="18" fill="white" />
      <rect x="0" y="7.5" width="25" height="3" fill="white" />
      <rect x="8" y="0" width="1" height="18" fill="#D72828" />
      <rect x="0" y="8.5" width="25" height="1" fill="#D72828" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 25 18" fill="none">
      <rect width="25" height="18" fill="#012169" />
      <path d="M0 0L25 18M25 0L0 18" stroke="white" strokeWidth="2" />
      <path d="M12.5 0V18M0 9H25" stroke="white" strokeWidth="3" />
      <path d="M0 0L25 18M25 0L0 18" stroke="#C8102E" strokeWidth="1" />
      <path d="M12.5 0V18M0 9H25" stroke="#C8102E" strokeWidth="1.5" />
    </svg>
  )
}

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          {language === "is" ? <IcelandFlag className="h-4 w-6" /> : <UKFlag className="h-4 w-6" />}
          <span className="hidden sm:inline">
            {language === "is" ? t("language.icelandic") : t("language.english")}
          </span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center space-x-2">
          <UKFlag className="h-4 w-6" />
          <span>{t("language.english")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("is")} className="flex items-center space-x-2">
          <IcelandFlag className="h-4 w-6" />
          <span>{t("language.icelandic")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
