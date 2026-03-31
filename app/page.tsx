import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  HeroSection,
  ProblemSection,
  WorkflowSection,
  ProductValueSection,
  WhoSection,
  ProductPreviewSection,
  FinalCTASection,
} from "@/components/home-sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WorkflowSection />
        <ProductValueSection />
        <WhoSection />
        <ProductPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
