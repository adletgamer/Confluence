import Link from "next/link"
import { ArrowRight, Shield, FileCheck, History, Zap, CheckCircle2, LayoutDashboard, ShieldCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionContainer, SectionHeader, FeatureCard } from "@/components/shared"

// Hero Section
export function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              On-chain credit scoring for programmable trust
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Confluxi enables undercollateralized lending by transforming wallet activity into verifiable, auditable credit signals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Start Demo
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#product">Explore Product</Link>
              </Button>
            </div>
          </div>

          {/* Right - Product Preview Card */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-muted-foreground">Credit Score</span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium">Verified</span>
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">742</div>
              <p className="text-sm text-muted-foreground mb-6">Strong creditworthiness</p>
              <div className="space-y-3">
                {[
                  { label: "Wallet Age", value: "2.4 years" },
                  { label: "Repayment Rate", value: "98%" },
                  { label: "Collateral Health", value: "89%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
export function ProblemSection() {
  const problems = [
    {
      icon: <Shield size={20} />,
      title: "No Portable Credit",
      description: "Traditional credit scores don&apos;t work on-chain. Every protocol starts from zero.",
    },
    {
      icon: <FileCheck size={20} />,
      title: "Over-Collateralization",
      description: "DeFi lending requires 150%+ collateral, locking capital and limiting access.",
    },
    {
      icon: <History size={20} />,
      title: "No Audit Trail",
      description: "Verification processes are opaque with no shared record of borrower history.",
    },
  ]

  return (
    <SectionContainer id="product" className="bg-secondary/30">
      <SectionHeader
        eyebrow="The Problem"
        title="DeFi lacks reusable credit infrastructure"
        subtitle="Current lending protocols treat every borrower as unknown, requiring excessive collateral and missing the opportunity to build trust over time."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <FeatureCard key={problem.title} {...problem} />
        ))}
      </div>
    </SectionContainer>
  )
}

// Workflow Section
export function WorkflowSection() {
  const steps = [
    { number: "01", title: "Application", description: "Submit loan request with basic parameters" },
    { number: "02", title: "Verification Room", description: "Complete structured verification checklist" },
    { number: "03", title: "Negotiation", description: "Review terms with potential lenders" },
    { number: "04", title: "On-chain Execution", description: "Agreement recorded on Conflux network" },
  ]

  return (
    <SectionContainer id="workflow">
      <SectionHeader
        eyebrow="How It Works"
        title="From application to execution"
        subtitle="A structured, transparent process that builds trust between borrowers and lenders."
        centered
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="bg-card border border-border rounded-xl p-6">
              <span className="text-3xl font-bold text-border">{step.number}</span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

// Product Value Section
export function ProductValueSection() {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Explainable Score",
      description: "Break down credit factors into transparent, verifiable components.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Structured Verification",
      description: "Standardized checklist for identity, collateral, and history verification.",
    },
    {
      icon: <History size={20} />,
      title: "Audit-Friendly Records",
      description: "Every action logged on-chain for complete transparency and compliance.",
    },
    {
      icon: <FileText size={20} />,
      title: "Programmable Agreements",
      description: "Smart contract-based terms that execute automatically on conditions.",
    },
  ]

  return (
    <SectionContainer className="bg-secondary/30">
      <SectionHeader
        eyebrow="Product Value"
        title="Built for institutional trust"
        subtitle="Every feature designed to meet the standards of serious financial infrastructure."
        centered
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </SectionContainer>
  )
}

// Who This Is For Section
export function WhoSection() {
  const audiences = [
    { title: "DeFi Protocols", description: "Integrate credit signals to enable undercollateralized lending" },
    { title: "Institutional Lenders", description: "Access verified borrower profiles with audit trails" },
    { title: "Borrowers", description: "Build portable credit history across protocols" },
  ]

  return (
    <SectionContainer>
      <SectionHeader
        eyebrow="Who This Is For"
        title="For builders and participants in programmable finance"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <CheckCircle2 size={20} className="text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

// Product Preview Section
export function ProductPreviewSection() {
  const previews = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard size={24} />,
      title: "Dashboard",
      description: "Overview of loans, credit score, and verification status",
    },
    {
      href: "/verification",
      icon: <ShieldCheck size={24} />,
      title: "Verification Room",
      description: "Complete verification checklist and submit evidence",
    },
    {
      href: "/loans/loan-001",
      icon: <FileText size={24} />,
      title: "Loan Detail",
      description: "View loan terms, status, and repayment schedule",
    },
  ]

  return (
    <SectionContainer id="developers" className="bg-secondary/30">
      <SectionHeader
        eyebrow="Product Preview"
        title="Explore the interface"
        subtitle="See how Confluxi works from borrower and lender perspectives."
        centered
      />
      <div className="grid md:grid-cols-3 gap-6">
        {previews.map((preview) => (
          <Link
            key={preview.href}
            href={preview.href}
            className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-foreground mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              {preview.icon}
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">{preview.title}</h3>
            <p className="text-sm text-muted-foreground">{preview.description}</p>
          </Link>
        ))}
      </div>
    </SectionContainer>
  )
}

// Final CTA Section
export function FinalCTASection() {
  return (
    <SectionContainer id="docs">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
          Ready to explore?
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Try the demo to see how Confluxi enables programmable credit infrastructure.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Start Demo
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#product">Explore Product</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
