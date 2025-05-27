import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FounderSignupForm } from "@/components/founder-signup-form"

export default function FounderPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <FounderSignupForm />
      <Footer />
    </main>
  )
}
