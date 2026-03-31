import Link from "next/link"
import { Plus, DollarSign, CreditCard, Shield, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader, MetricCard, StatusBadge } from "@/components/shared"
import { mockDashboardStats, mockLoans, mockCreditFactors } from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your lending activity and credit profile"
        action={
          <Button asChild>
            <Link href="/loans/new">
              <Plus size={16} className="mr-2" />
              New Loan Request
            </Link>
          </Button>
        }
      />

      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Total Borrowed"
          value={`$${mockDashboardStats.totalBorrowed.toLocaleString()}`}
          subtitle="Across all loans"
          icon={<DollarSign size={20} />}
        />
        <MetricCard
          label="Active Loans"
          value={mockDashboardStats.activeLoanCount}
          subtitle="Currently active"
          icon={<CreditCard size={20} />}
        />
        <MetricCard
          label="Credit Score"
          value={mockDashboardStats.creditScore}
          subtitle="Strong"
          icon={<Shield size={20} />}
        />
        <MetricCard
          label="Collateral Health"
          value={`${mockDashboardStats.collateralHealth}%`}
          subtitle="Well positioned"
          icon={<Activity size={20} />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Loans */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Recent Loans</h2>
              <Link href="/loans/new" className="text-sm text-accent hover:underline">
                View all
              </Link>
            </div>
            <div className="divide-y divide-border">
              {mockLoans.map((loan) => (
                <Link
                  key={loan.id}
                  href={`/loans/${loan.id}`}
                  className="flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{loan.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {loan.amount.toLocaleString()} {loan.currency}
                    </p>
                  </div>
                  <StatusBadge status={loan.status} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Credit Factors */}
        <div className="bg-card border border-border rounded-xl">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="text-base font-semibold text-foreground">Credit Factors</h2>
          </div>
          <div className="p-5 space-y-4">
            {mockCreditFactors.map((factor) => (
              <div key={factor.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{factor.label}</span>
                  <span className="font-medium text-foreground">{factor.score}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${factor.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
