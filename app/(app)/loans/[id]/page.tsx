import Link from "next/link"
import { ArrowLeft, Calendar, DollarSign, Percent, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader, StatusBadge, MetricCard } from "@/components/shared"
import { mockLoans, mockAuditTrail } from "@/lib/mock-data"
import { notFound } from "next/navigation"

export default async function LoanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const loan = mockLoans.find((l) => l.id === id)

  if (!loan) {
    notFound()
  }

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
        title={loan.title}
        subtitle={`Loan ID: ${loan.id}`}
        action={
          <div className="flex items-center gap-3">
            <StatusBadge status={loan.status} />
            {loan.status === "active" && (
              <Button variant="outline">Make Payment</Button>
            )}
          </div>
        }
      />

      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Loan Amount"
          value={`${loan.amount.toLocaleString()} ${loan.currency}`}
          icon={<DollarSign size={20} />}
        />
        <MetricCard
          label="Collateral Ratio"
          value={`${loan.collateralRatio}%`}
          icon={<Percent size={20} />}
        />
        <MetricCard
          label="Due Date"
          value={new Date(loan.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          icon={<Calendar size={20} />}
        />
        <MetricCard
          label="Created"
          value={new Date(loan.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          icon={<Clock size={20} />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Loan Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-[20px] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-border/50">
              <h2 className="text-lg font-semibold text-foreground">Loan Details</h2>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Borrower</p>
                  <p className="text-sm font-medium text-foreground font-mono">{loan.borrower}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Lender</p>
                  <p className="text-sm font-medium text-foreground font-mono">{loan.lender || "Pending"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Currency</p>
                  <p className="text-sm font-medium text-foreground">{loan.currency}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                  <StatusBadge status={loan.status} />
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail */}
          <div className="bg-card border border-border rounded-xl">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Activity Log</h2>
              <Link href="/audit" className="text-sm text-accent hover:underline">
                View full trail
              </Link>
            </div>
            <div className="divide-y divide-border">
              {mockAuditTrail.slice(0, 4).map((item) => (
                <div key={item.id} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.details}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Parties */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Parties</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                  <User size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Borrower</p>
                  <p className="text-sm font-medium font-mono text-foreground">{loan.borrower}</p>
                </div>
              </div>
              {loan.lender && (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                    <User size={16} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Lender</p>
                    <p className="text-sm font-medium font-mono text-foreground">{loan.lender}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-secondary/50 border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Link href="/verification" className="flex items-center w-full">
                  View Verification
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Download Agreement
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
