import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <TermsContent />
      <Footer />
    </main>
  )
}
