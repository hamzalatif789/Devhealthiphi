import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FounderSuccessContent } from "@/components/founder-success-content"

export default function FounderSuccessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <FounderSuccessContent />
      <Footer />
    </main>
  )
}
