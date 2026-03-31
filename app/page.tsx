import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import {
  ProblemSection,
  SolutionSection,
  FeaturesSection,
  LiveExampleSection,
  WhyMattersSection,
  UseCasesSection,
  DevelopersSection,
  HowItWorksSection,
} from "@/components/content-sections"
import { ConfluxSection } from "@/components/conflux-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <LiveExampleSection />
      <WhyMattersSection />
      <UseCasesSection />
      <DevelopersSection />
      <HowItWorksSection />
      <ConfluxSection />
      <Footer />
    </main>
  )
}
