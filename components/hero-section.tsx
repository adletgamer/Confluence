import { ArrowRight, ShieldCheck } from "lucide-react"

function ScoreMockUI() {
  const riskDrivers = [
    { label: "Repayment history", value: 92, color: "bg-accent" },
    { label: "Collateral ratio", value: 78, color: "bg-accent/70" },
    { label: "Protocol diversity", value: 65, color: "bg-accent/50" },
    { label: "Liquidation events", value: 88, color: "bg-accent/80" },
  ]

  return (
    <div className="w-full max-w-sm mx-auto rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/40">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Credit Score</p>
          <p className="text-xs text-muted-foreground mt-0.5 font-mono">0x3f4a…c91b</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-accent font-medium">
          <ShieldCheck size={14} />
          Verified on-chain
        </div>
      </div>

      {/* Score ring */}
      <div className="flex flex-col items-center py-8 gap-2">
        <div className="relative flex items-center justify-center w-28 h-28">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="263.9"
              strokeDashoffset="52.78"   /* 80% fill = 263.9 * 0.2 */
              strokeLinecap="round"
              className="text-accent"
            />
          </svg>
          <div className="text-center z-10">
            <span className="text-3xl font-bold text-foreground">782</span>
            <span className="block text-[10px] text-muted-foreground mt-0.5">/ 850</span>
          </div>
        </div>
        <span className="text-sm font-medium text-foreground">Low Risk</span>
        <span className="text-xs text-muted-foreground">Confidence: 94%</span>
      </div>

      {/* Risk drivers */}
      <div className="px-5 pb-5 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Risk Drivers</p>
        {riskDrivers.map((driver) => (
          <div key={driver.label} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground/80">{driver.label}</span>
              <span className="text-muted-foreground font-mono">{driver.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className={`h-full rounded-full ${driver.color}`}
                style={{ width: `${driver.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-border bg-secondary/30 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">Last updated: block #18,440,212</span>
        <span className="text-[11px] font-medium text-accent">Conflux eSpace</span>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              Live on Conflux eSpace
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-tight text-balance"
            >
              On-chain credit scoring for programmable finance
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              We transform wallet activity into verifiable risk signals and publish them on-chain.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Connect Wallet
                <ArrowRight size={15} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                View Demo Score
              </a>
            </div>
          </div>

          {/* Right — mock UI */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <ScoreMockUI />
          </div>
        </div>
      </div>
    </section>
  )
}
