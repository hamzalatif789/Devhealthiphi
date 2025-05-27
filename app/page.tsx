import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { FounderPassSection } from "@/components/founder-pass-section"
import { TalentSection } from "@/components/talent-section"
import { ProgressBand } from "@/components/progress-band"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { MiniManifesto } from "@/components/mini-manifesto"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <ProblemSection />
      <FounderPassSection />
      <TalentSection />
      <ProgressBand />
      <TestimonialsSection />
      <FaqSection />
      <MiniManifesto />
      <Footer />
    </main>
  )
}
