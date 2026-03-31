import { ArrowRight, ShieldCheck, TrendingUp, Activity } from "lucide-react"

function ScoreMockUI() {
  const riskDrivers = [
    { label: "Repayment history", value: 92, status: "positive" },
    { label: "Collateral ratio", value: 78, status: "positive" },
    { label: "Protocol diversity", value: 65, status: "neutral" },
    { label: "Liquidation events", value: 88, status: "positive" },
  ]

  return (
    <div className="w-full rounded-2xl border border-border bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/50">
        <div>
          <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
            Credit Score
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 font-mono">0x3f4a…c91b</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent bg-accent/8 px-2.5 py-1 rounded-full">
          <ShieldCheck size={12} />
          Verified on-chain
        </span>
      </div>

      {/* Score display */}
      <div className="flex flex-col items-center py-7 gap-1.5">
        <div className="relative flex items-center justify-center w-32 h-32">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6"
              className="text-border" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6"
              strokeDasharray="251.3"
              strokeDashoffset="50.26"
              strokeLinecap="round"
              className="text-accent transition-all duration-1000" />
          </svg>
          <div className="text-center z-10">
            <span className="text-[2.25rem] font-bold text-foreground leading-none">782</span>
            <span className="block text-[10px] text-muted-foreground mt-1 font-medium">out of 850</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-semibold text-foreground">Low Risk</span>
        </div>
        <span className="text-xs text-muted-foreground">Confidence score: 94%</span>
      </div>

      {/* Risk drivers */}
      <div className="px-5 pb-5 flex flex-col gap-3.5">
        <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
          Risk Drivers
        </p>
        {riskDrivers.map((driver) => (
          <div key={driver.label} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-foreground/80 font-medium">{driver.label}</span>
              <span className="text-muted-foreground font-mono tabular-nums">{driver.value}/100</span>
            </div>
            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${driver.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Card footer */}
      <div className="px-5 py-3 border-t border-border bg-secondary/30 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground font-mono">Block #18,440,212</span>
        <span className="text-[11px] font-semibold text-accent">Conflux eSpace</span>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-border bg-secondary text-[11px] text-muted-foreground font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Live on Conflux eSpace
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight text-balance"
            >
              On-chain credit scoring for programmable finance
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Confluxi transforms wallet activity into verifiable, on-chain risk signals — enabling undercollateralized lending and programmable credit in DeFi.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#live-example"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                See Live Example
                <ArrowRight size={14} />
              </a>
              <a
                href="#developers"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                View API Docs
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: ShieldCheck, label: "Scores verified on-chain" },
                { icon: TrendingUp, label: "Explainable risk signals" },
                { icon: Activity, label: "Real-time updates" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon size={13} className="text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mock UI */}
          <div className="w-full max-w-[360px] lg:max-w-[380px] shrink-0 mx-auto">
            <ScoreMockUI />
          </div>
        </div>
      </div>
    </section>
  )
}
