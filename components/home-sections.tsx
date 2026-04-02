import Link from "next/link"
import { ArrowRight, Shield, FileCheck, History, Zap, CheckCircle2, LayoutDashboard, ShieldCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionContainer, SectionHeader, FeatureCard } from "@/components/shared"

// Hero Section
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary">On-Chain Credit Scoring</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] tracking-tight text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              On-chain credit scoring for programmable trust
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Confluxi enables undercollateralized lending by transforming wallet activity into verifiable, auditable credit signals.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="rounded-[14px] h-12 px-8 font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Link href="/dashboard">
                  Start Demo
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-[14px] h-12 px-8 font-semibold border-2 hover:bg-primary/5">
                <Link href="/auth">
                  Sign In
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-xs">
              {[
                { label: "Live on Conflux", value: "eSpace" },
                { label: "Users", value: "2.4K+" },
                { label: "TVL", value: "$12M+" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Preview Card with Web3 Style */}
          <div className="flex-1 w-full max-w-md animate-float">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-[24px] blur-2xl opacity-60 animate-pulse" />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-primary/30 rounded-[24px] p-8 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">Credit Score</span>
                  <span className="text-xs px-3 py-1.5 bg-emerald-500/20 text-emerald-600 border border-emerald-500/40 rounded-full font-semibold">Verified</span>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-foreground tracking-tight">742</div>
                  <p className="text-sm text-muted-foreground mt-2">Strong creditworthiness</p>
                </div>

                {/* Credit factors with visual bars */}
                <div className="space-y-5">
                  {[
                    { label: "Wallet Age", value: "2.4 years", percent: 94 },
                    { label: "Repayment Rate", value: "98%", percent: 98 },
                    { label: "Collateral Health", value: "89%", percent: 89 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        <span className="text-xs font-semibold text-primary">{item.value}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-700"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom action */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <button className="w-full py-2.5 rounded-[12px] bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors">
                    View Full Report
                  </button>
                </div>
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
        {steps.map((step, idx) => (
          <div key={step.number} className="relative group">
            {/* Animated connector line */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
            )}

            <div className="relative bg-card border-2 border-border group-hover:border-primary/50 rounded-[20px] p-8 shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              {/* Step number with glow */}
              <div className="relative mb-6">
                <span className="block text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{step.number}</span>
                <span className="absolute top-0 text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-transparent rounded-b-[20px] opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="group relative bg-card border-2 border-border rounded-[20px] p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                {preview.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{preview.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{preview.description}</p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Explore</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
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
