import { Network, Zap, GitBranch } from "lucide-react"

const highlights = [
  {
    icon: Network,
    title: "eSpace (EVM-Compatible)",
    description: "Leverages the Ethereum-compatible eSpace to support all standard EVM contracts and tooling.",
  },
  {
    icon: Zap,
    title: "Low-cost transactions",
    description: "Minimal gas fees allow frequent score updates without prohibitive costs for users or protocols.",
  },
  {
    icon: GitBranch,
    title: "High throughput (Tree-Graph)",
    description: "Conflux's unique consensus enables parallel block processing for scalability without sacrificing security.",
  },
]

export function ConfluxSection() {
  return (
    <section
      id="conflux"
      className="py-20 md:py-28 bg-secondary/40 border-y border-border"
      aria-labelledby="conflux-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Powered by Conflux Network</p>
          <h2
            id="conflux-heading"
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            Built for performance and cost efficiency
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Conflux provides EVM compatibility, low fees, and high throughput — a perfect fit for verifiable credit infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
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
