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
          <div className="bg-card border border-border rounded-[20px] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Recent Loans</h2>
              <Link href="/loans/new" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View all →
              </Link>
            </div>
            <div className="divide-y divide-border/50">
              {mockLoans.map((loan) => (
                <Link
                  key={loan.id}
                  href={`/loans/${loan.id}`}
                  className="flex items-center justify-between px-6 py-4 hover:bg-secondary/40 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{loan.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
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
        <div className="bg-card border border-border rounded-[20px] shadow-sm p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Credit Factors</h2>
          <div className="space-y-6">
            {mockCreditFactors.map((factor) => (
              <div key={factor.label}>
                <div className="flex items-center justify-between text-sm mb-2.5">
                  <span className="font-medium text-foreground">{factor.label}</span>
                  <span className="font-semibold text-primary">{factor.score}%</span>
                </div>
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
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
