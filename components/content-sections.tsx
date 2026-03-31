import { AlertTriangle, Layers, BarChart2, CheckSquare } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "No standardized risk scoring",
    description:
      "DeFi protocols each assess risk in isolation with no interoperable credit standard across the ecosystem.",
  },
  {
    icon: Layers,
    title: "Overcollateralization inefficiency",
    description:
      "Borrowers are forced to lock up excessive capital because lenders have no trusted way to evaluate creditworthiness.",
  },
  {
    icon: BarChart2,
    title: "No verifiable credit history",
    description:
      "On-chain activity goes unrecognized. There is no portable, verifiable record a borrower can present across protocols.",
  },
]

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">The Problem</p>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            DeFi lacks reliable credit infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Solution Section ──────────────────────────────────────────────────────────

const steps = [
  { number: "01", title: "Wallet data ingestion", description: "Historical on-chain activity is pulled from indexed protocol data." },
  { number: "02", title: "Feature extraction", description: "Liquidity patterns, repayment records, and protocol interactions are extracted." },
  { number: "03", title: "Risk scoring", description: "A deterministic model produces an explainable score with confidence bounds." },
  { number: "04", title: "On-chain verification", description: "The score snapshot is committed to Conflux as an immutable, auditable record." },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="solution-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">The Solution</p>
          <h2
            id="solution-heading"
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            A transparent, on-chain scoring layer
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Confluxi ingests wallet data, extracts risk features, and publishes verifiable credit scores directly to the Conflux network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
            >
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border z-10" aria-hidden="true" />
              )}
              <span className="text-xs font-mono text-accent font-semibold">{step.number}</span>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features Section ──────────────────────────────────────────────────────────

import { Eye, FileCheck, Code, Building2 } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Explainable Scores",
    description: "Every score comes with a breakdown of contributing signals — no black boxes.",
  },
  {
    icon: FileCheck,
    title: "Verifiable Snapshots",
    description: "Score states are committed to the chain and can be audited by anyone at any time.",
  },
  {
    icon: Code,
    title: "API-Ready",
    description: "Integrate credit scores into any DeFi protocol via our JSON-RPC and REST APIs.",
  },
  {
    icon: Building2,
    title: "Lending-Ready",
    description: "Designed to plug directly into lending pools for undercollateralized loan decisioning.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Features</p>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            Built for institutional-grade DeFi
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center">
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works Section ─────────────────────────────────────────────────────

const flow = [
  { label: "Wallet" },
  { label: "Data" },
  { label: "Score" },
  { label: "Smart Contract" },
  { label: "Lending" },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">How It Works</p>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            From wallet to lending in one flow
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Confluxi sits between on-chain data and lending protocols, providing a verified credit layer with no centralized intermediary.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {flow.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent bg-secondary text-accent text-xs font-bold">
                  {i + 1}
                </div>
                <span className="text-xs font-medium text-foreground whitespace-nowrap">{step.label}</span>
              </div>
              {i < flow.length - 1 && (
                <div className="w-8 md:w-14 h-px bg-border mx-1 mb-5" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
