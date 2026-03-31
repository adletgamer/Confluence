import { Network, Zap, GitBranch } from "lucide-react"

const highlights = [
  {
    icon: Network,
    title: "eSpace (EVM-Compatible)",
    description:
      "Leverages Ethereum-compatible eSpace to support all standard EVM contracts and developer tooling with no migration overhead.",
  },
  {
    icon: Zap,
    title: "Low-cost transactions",
    description:
      "Minimal gas fees allow frequent score updates without prohibitive costs for users or integrated protocols.",
  },
  {
    icon: GitBranch,
    title: "High throughput (Tree-Graph)",
    description:
      "Conflux&apos;s unique consensus enables parallel block processing for scalability without sacrificing security.",
  },
]

export function ConfluxSection() {
  return (
    <section
      id="conflux"
      className="py-20 md:py-28 bg-background border-b border-border"
      aria-labelledby="conflux-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold mb-3">
            Powered by Conflux Network
          </p>
          <h2
            id="conflux-heading"
            className="text-3xl md:text-[2.25rem] font-bold text-foreground tracking-tight text-balance leading-tight"
          >
            Built for performance and cost efficiency
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Conflux provides EVM compatibility, low fees, and high throughput — the right foundation for verifiable credit infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center">
                  <Icon size={17} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
