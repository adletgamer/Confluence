import { User, Mail, Wallet, CheckCircle, Shield, Target, Edit2, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader, MetricCard, StatusBadge } from "@/components/shared"

export default function ProfilePage() {
  const userEmail = "alex@example.com"
  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f42aE8"
  const currentScore = 742
  const potentialScore = 780

  const kycItems = [
    { label: "Identity Verification", status: "completed" as const, icon: <User size={18} /> },
    { label: "Wallet Ownership", status: "completed" as const, icon: <Wallet size={18} /> },
    { label: "Document Upload", status: "in-progress" as const, icon: <Shield size={18} /> },
  ]

  const incomeRanges = ["<1k", "1k-5k", "5k-10k", "10k+"]
  const employmentTypes = ["Employed", "Freelance", "Founder", "Unemployed"]
  const sourcesOfFunds = ["Salary", "Trading", "Business", "DeFi Yield"]

  return (
    <main className="flex-1">
      <PageHeader
        title="My Profile"
        subtitle="Manage your account information and financial profile"
      />

      <div className="space-y-8 pb-12">
        {/* Profile Summary Card */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-[20px] p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Account Information
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-semibold text-foreground">{userEmail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet size={18} className="text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Connected Wallet</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs font-mono text-foreground">
                        {walletAddress.slice(0, 10)}...{walletAddress.slice(-8)}
                      </p>
                      <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                        <Copy size={14} className="text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Verification Status
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StatusBadge status="verified" />
                    <span className="text-sm text-muted-foreground">Profile Complete</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">All required verifications passed</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-[10px]">
                  <Edit2 size={14} className="mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Score Impact Card - WOW Factor */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Current Credit Score
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-foreground">{currentScore}</span>
              <span className="text-sm text-muted-foreground">/ 850</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mt-6 mb-4">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                style={{ width: `${(currentScore / 850) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">Strong creditworthiness</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-5 border border-emerald-200/30 rounded-[20px] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-4">
              Potential Score
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-emerald-700">{potentialScore}</span>
              <span className="text-sm text-emerald-600/60">/ 850</span>
            </div>
            <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden mt-6 mb-4">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${(potentialScore / 850) * 100}%` }}
              />
            </div>
            <p className="text-xs text-emerald-600 font-medium">Complete profile to improve your creditworthiness</p>
          </div>
        </div>

        {/* Identity & KYC Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Shield size={20} className="text-primary" />
            Identity & KYC Verification
          </h2>
          <div className="space-y-3">
            {kycItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-4 bg-secondary/40 rounded-[14px] hover:bg-secondary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Financial Profile Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target size={20} className="text-primary" />
            Financial Profile
          </h2>
          <form className="space-y-6">
            {/* Income Range */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Monthly Income Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {incomeRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Employment */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Employment Status
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {employmentTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-foreground mb-2">
                Country
              </label>
              <Input
                id="country"
                placeholder="Select your country"
                className="rounded-[12px]"
              />
            </div>

            {/* Source of Funds */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Source of Funds
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sourcesOfFunds.map((source) => (
                  <button
                    key={source}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="rounded-[12px]">Save Changes</Button>
              <Button variant="outline" className="rounded-[12px]">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
