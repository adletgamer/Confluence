import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/shared"

export default function NewLoanPage() {
  return (
    <>
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          Back to Dashboard
        </Link>
      </div>

      <PageHeader
        title="New Loan Request"
        subtitle="Submit a loan application for review by potential lenders"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6">
            <form className="space-y-6">
              {/* Loan Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                  Loan Title
                </label>
                <Input
                  id="title"
                  placeholder="e.g., Working Capital Facility"
                  className="w-full"
                />
                <p className="mt-1.5 text-xs text-muted-foreground">
                  A descriptive name for this loan request
                </p>
              </div>

              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
                  Loan Amount
                </label>
                <div className="flex gap-3">
                  <Input
                    id="amount"
                    type="number"
                    placeholder="50,000"
                    className="flex-1"
                  />
                  <select className="px-3 py-2 border border-border rounded-lg bg-background text-sm font-medium">
                    <option>USDC</option>
                    <option>USDT</option>
                    <option>DAI</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-foreground mb-2">
                  Loan Duration
                </label>
                <select
                  id="duration"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                >
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                  <option>180 days</option>
                  <option>365 days</option>
                </select>
              </div>

              {/* Purpose */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-foreground mb-2">
                  Purpose
                </label>
                <textarea
                  id="purpose"
                  rows={4}
                  placeholder="Describe the purpose of this loan..."
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Collateral */}
              <div>
                <label htmlFor="collateral" className="block text-sm font-medium text-foreground mb-2">
                  Proposed Collateral Ratio
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    id="collateral"
                    type="number"
                    defaultValue="85"
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">%</span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Lower ratios may require stronger credit verification
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button type="button">Submit Application</Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/dashboard">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div>
          <div className="bg-secondary/50 border border-border rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <Info size={18} className="text-accent mt-0.5" />
              <h3 className="text-sm font-semibold text-foreground">What happens next?</h3>
            </div>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0">1</span>
                <span>Your application enters the verification room</span>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0">2</span>
                <span>Complete verification checklist items</span>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0">3</span>
                <span>Potential lenders review your profile</span>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0">4</span>
                <span>Negotiate terms and execute on-chain</span>
              </li>
            </ol>
          </div>

          <div className="mt-4 bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Your Credit Profile</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Credit Score</span>
                <span className="font-medium text-foreground">742</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Verification</span>
                <span className="font-medium text-emerald-600">75% Complete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Past Loans</span>
                <span className="font-medium text-foreground">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
