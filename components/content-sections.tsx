import {
  AlertTriangle,
  Layers,
  BarChart2,
  Eye,
  FileCheck,
  Code,
  Building2,
  ArrowRight,
  Database,
  Cpu,
  Lock,
  GitMerge,
} from "lucide-react"

// ─── Shared section header ────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
      <p className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold mb-3">{eyebrow}</p>
      <h2
        id={id}
        className="text-3xl md:text-[2.25rem] font-bold text-foreground tracking-tight text-balance leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}

// ─── Problem Section ──────────────────────────────────────────────────────────

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
      "Borrowers lock up excessive capital because lenders have no trusted way to evaluate creditworthiness.",
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
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Problem"
          title="DeFi lacks reliable credit infrastructure"
          id="problem-heading"
        />
        <div className="grid sm:grid-cols-3 gap-5">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/6 flex items-center justify-center">
                  <Icon size={17} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
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
  {
    number: "01",
    title: "Wallet data ingestion",
    description: "Historical on-chain activity is pulled from indexed protocol data.",
    icon: Database,
  },
  {
    number: "02",
    title: "Feature extraction",
    description: "Liquidity patterns, repayment records, and protocol interactions are extracted.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Risk scoring",
    description: "A deterministic model produces an explainable score with confidence bounds.",
    icon: BarChart2,
  },
  {
    number: "04",
    title: "On-chain verification",
    description: "The score snapshot is committed to Conflux as an immutable, auditable record.",
    icon: Lock,
  },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="solution-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Solution"
          title="A transparent, on-chain scoring layer"
          description="Confluxi ingests wallet data, extracts risk features, and publishes verifiable credit scores directly to the Conflux network."
          id="solution-heading"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative rounded-xl border border-border bg-card p-6 flex flex-col gap-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              >
                {i < steps.length - 1 && (
                  <span className="hidden lg:flex absolute top-9 -right-3 items-center">
                    <ArrowRight size={14} className="text-border" />
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-accent font-bold tracking-wider">{step.number}</span>
                  <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center">
                    <Icon size={15} className="text-muted-foreground" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Features Section ──────────────────────────────────────────────────────────

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
    description: "Integrate credit scores into any DeFi protocol via JSON-RPC and REST APIs.",
  },
  {
    icon: Building2,
    title: "Lending-Ready",
    description: "Designed to plug into lending pools for undercollateralized loan decisioning.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Built for institutional-grade DeFi"
          id="features-heading"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center">
                  <Icon size={17} className="text-accent" aria-hidden="true" />
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

// ─── Live Credit Example ──────────────────────────────────────────────────────

const scoreDrivers = [
  { label: "Wallet age", value: "2.3 years", signal: "positive" },
  { label: "Repayment behavior", value: "Positive", signal: "positive" },
  { label: "Volatility exposure", value: "Medium", signal: "neutral" },
]

export function LiveExampleSection() {
  return (
    <section
      id="live-example"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="live-example-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Live Credit Example"
          title="What a real score looks like"
          description="This is a sample wallet score showing how Confluxi evaluates on-chain activity into structured, explainable risk signals."
          id="live-example-heading"
        />

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-border bg-secondary/40">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold mb-1">
                  Sample Wallet Address
                </p>
                <p className="font-mono text-sm text-foreground">0x742d…35Cc</p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-accent bg-accent/8 px-3 py-1.5 rounded-full self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Score published on-chain
              </div>
            </div>

            {/* Score + meta */}
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="flex flex-col items-center justify-center py-8 px-6 gap-1">
                <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-semibold">
                  Credit Score
                </span>
                <span className="text-5xl font-bold text-foreground mt-1">742</span>
                <span className="text-xs text-muted-foreground">out of 850</span>
              </div>
              <div className="flex flex-col items-center justify-center py-8 px-6 gap-1">
                <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-semibold">
                  Risk Level
                </span>
                <span className="mt-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-8 px-6 gap-1">
                <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-semibold">
                  Confidence
                </span>
                <span className="text-5xl font-bold text-foreground mt-1">87<span className="text-2xl">%</span></span>
              </div>
            </div>

            {/* Drivers */}
            <div className="border-t border-border px-6 py-5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold mb-4">
                Score Drivers
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {scoreDrivers.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-lg border border-border bg-secondary/40 px-4 py-3.5 flex flex-col gap-1"
                  >
                    <span className="text-[11px] text-muted-foreground font-medium">{d.label}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          d.signal === "positive" ? "bg-accent" : "bg-amber-400"
                        }`}
                      />
                      <span className="text-sm font-semibold text-foreground">{d.value}</span>
                    </div>
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

// ─── Why This Matters ─────────────────────────────────────────────────────────

const comparisonRows = [
  { label: "Credit history",   trad: false,  defi: false,  confluxi: true  },
  { label: "Transparency",     trad: false,  defi: "warn", confluxi: true  },
  { label: "Programmability",  trad: false,  defi: "warn", confluxi: true  },
  { label: "On-chain proof",   trad: false,  defi: false,  confluxi: true  },
  { label: "No intermediary",  trad: false,  defi: "warn", confluxi: true  },
]

function Cell({ value }: { value: boolean | "warn" }) {
  if (value === true)
    return (
      <td className="px-5 py-4 text-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/10">
          <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6l3 3 5-5" />
          </svg>
        </span>
      </td>
    )
  if (value === "warn")
    return (
      <td className="px-5 py-4 text-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-50">
          <span className="text-amber-500 text-xs font-bold leading-none">~</span>
        </span>
      </td>
    )
  return (
    <td className="px-5 py-4 text-center">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary">
        <svg viewBox="0 0 12 12" className="w-3 h-3 text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M2 6h8" />
        </svg>
      </span>
    </td>
  )
}

export function WhyMattersSection() {
  return (
    <section
      id="why-matters"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="why-matters-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why This Matters"
          title="Credit infrastructure reimagined for DeFi"
          description="Traditional finance and generic DeFi both fall short. Confluxi bridges the gap with verifiable, on-chain credit signals."
          id="why-matters-heading"
        />

        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-semibold w-[40%]">
                  Capability
                </th>
                <th className="px-5 py-4 text-center text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                  Traditional Finance
                </th>
                <th className="px-5 py-4 text-center text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                  Generic DeFi
                </th>
                <th className="px-5 py-4 text-center text-[11px] uppercase tracking-[0.12em] text-accent font-semibold bg-accent/4">
                  Confluxi
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < comparisonRows.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-5 py-4 text-sm font-medium text-foreground">{row.label}</td>
                  <Cell value={row.trad} />
                  <Cell value={row.defi} />
                  <td className="px-5 py-4 text-center bg-accent/4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/10">
                      <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          ~ Partially supported &nbsp;|&nbsp; - Not available
        </p>
      </div>
    </section>
  )
}

// ─── Use Cases ────────────────────────────────────────────────────────────────

const useCases = [
  {
    icon: Building2,
    label: "DeFi Lending Protocols",
    description:
      "Protocols can use Confluxi scores to offer risk-adjusted interest rates, reducing reliance on overcollateralization requirements.",
  },
  {
    icon: GitMerge,
    label: "Undercollateralized Loans",
    description:
      "Enable borrowers with strong on-chain history to access credit that wouldn't otherwise be available in a trust-minimized environment.",
  },
  {
    icon: Code,
    label: "Wallet Risk APIs",
    description:
      "Third-party applications can query wallet risk scores programmatically to power dashboards, risk engines, and compliance tooling.",
  },
]

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Use Cases"
          title="Where Confluxi fits in the stack"
          id="use-cases-heading"
        />
        <div className="grid sm:grid-cols-3 gap-5">
          {useCases.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/6 flex items-center justify-center">
                  <Icon size={17} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── For Developers ───────────────────────────────────────────────────────────

export function DevelopersSection() {
  return (
    <section
      id="developers"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="developers-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Left — copy */}
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold mb-3">
              For Developers
            </p>
            <h2
              id="developers-heading"
              className="text-3xl md:text-[2.25rem] font-bold text-foreground tracking-tight text-balance leading-tight"
            >
              Integrate in minutes
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-md">
              Query a wallet credit score with a single function call. Our API is designed for low-latency, high-throughput DeFi integrations.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "JSON-RPC and REST endpoints",
                "On-chain score verification",
                "Webhook support for score updates",
                "Conflux eSpace native",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Read the documentation
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — code block */}
          <div className="flex-1 w-full lg:max-w-[480px]">
            <div className="rounded-xl overflow-hidden border border-border shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)]">
              {/* Terminal chrome */}
              <div className="flex items-center justify-between bg-primary px-4 py-3 border-b border-border/20">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/20" />
                </div>
                <span className="text-[11px] font-mono text-primary-foreground/40">confluxi-sdk</span>
                <div className="w-12" />
              </div>

              {/* Code body */}
              <div className="bg-[oklch(0.13_0.04_261)] px-5 py-6 font-mono text-[13px] leading-7 overflow-x-auto">
                <p>
                  <span className="text-[oklch(0.65_0.14_200)]">import</span>
                  {" "}
                  <span className="text-primary-foreground/90">{"{ Confluxi }"}</span>
                  {" "}
                  <span className="text-[oklch(0.65_0.14_200)]">from</span>
                  {" "}
                  <span className="text-[oklch(0.75_0.12_160)]">&apos;confluxi-sdk&apos;</span>
                </p>
                <p className="mt-2">
                  <span className="text-primary-foreground/50">{"// Initialize the client"}</span>
                </p>
                <p>
                  <span className="text-[oklch(0.65_0.14_200)]">const</span>
                  {" "}
                  <span className="text-[oklch(0.75_0.20_261)]">client</span>
                  {" "}
                  <span className="text-primary-foreground/60">=</span>
                  {" "}
                  <span className="text-primary-foreground/90">new Confluxi(</span>
                  <span className="text-[oklch(0.75_0.12_160)]">"YOUR_API_KEY"</span>
                  <span className="text-primary-foreground/90">)</span>
                </p>
                <p className="mt-4">
                  <span className="text-primary-foreground/50">{"// Fetch score for a wallet"}</span>
                </p>
                <p>
                  <span className="text-[oklch(0.65_0.14_200)]">const</span>
                  {" "}
                  <span className="text-[oklch(0.75_0.20_261)]">score</span>
                  {" "}
                  <span className="text-primary-foreground/60">=</span>
                  {" "}
                  <span className="text-[oklch(0.65_0.14_200)]">await</span>
                  {" "}
                  <span className="text-primary-foreground/90">client.</span>
                  <span className="text-[oklch(0.65_0.18_200)]">getScore</span>
                  <span className="text-primary-foreground/90">(walletAddress)</span>
                </p>
                <p className="mt-4 text-primary-foreground/50">{"// Returns:"}</p>
                <p className="text-primary-foreground/80">{JSON.stringify({ score: 742, risk: "medium", confidence: 0.87 }, null, 0)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const flow = [
  { number: "01", label: "Wallet", description: "On-chain data source" },
  { number: "02", label: "Indexing", description: "Protocol activity indexed" },
  { number: "03", label: "Scoring", description: "Risk model applied" },
  { number: "04", label: "Chain", description: "Score committed on-chain" },
  { number: "05", label: "Lending", description: "Protocols consume score" },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="From wallet to lending in one flow"
          description="Confluxi sits between on-chain data and lending protocols, providing a verified credit layer with no centralized intermediary."
          id="how-it-works-heading"
        />

        {/* Flow diagram */}
        <div className="flex flex-wrap items-start justify-center gap-0">
          {flow.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2.5 px-3 text-center w-24">
                <div className="w-11 h-11 rounded-full border-2 border-accent/40 bg-accent/6 flex items-center justify-center">
                  <span className="text-[11px] font-mono font-bold text-accent">{step.number}</span>
                </div>
                <span className="text-xs font-semibold text-foreground">{step.label}</span>
                <span className="text-[11px] text-muted-foreground leading-snug">{step.description}</span>
              </div>
              {i < flow.length - 1 && (
                <div className="mb-12 hidden sm:flex items-center">
                  <div className="w-6 md:w-10 h-px bg-border" aria-hidden="true" />
                  <ArrowRight size={10} className="text-border -ml-1 shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
