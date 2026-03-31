import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import {
  ProblemSection,
  SolutionSection,
  FeaturesSection,
  HowItWorksSection,
} from "@/components/content-sections"
import { ConfluxSection } from "@/components/conflux-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ConfluxSection />
      <Footer />
    </main>
  )
}
