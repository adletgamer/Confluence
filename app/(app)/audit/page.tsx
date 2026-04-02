import { History, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/shared"
import { mockAuditTrail } from "@/lib/mock-data"

export default function AuditPage() {
  return (
    <>
      <PageHeader
        title="Audit Trail"
        subtitle="Complete history of all actions and status changes"
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter size={14} className="mr-1.5" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download size={14} className="mr-1.5" />
              Export
            </Button>
          </div>
        }
      />

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Total Events</p>
          <p className="text-3xl font-semibold text-foreground mt-2">{mockAuditTrail.length}</p>
        </div>
        <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">This Week</p>
          <p className="text-3xl font-semibold text-foreground mt-2">3</p>
        </div>
        <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Verified Actions</p>
          <p className="text-3xl font-semibold text-foreground mt-2">100%</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-card border border-border rounded-[20px] shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-border/50">
          <h2 className="text-lg font-semibold text-foreground">Activity Timeline</h2>
        </div>
        <div className="divide-y divide-border/50">
          {mockAuditTrail.map((item, index) => (
            <div key={item.id} className="px-6 py-5 hover:bg-secondary/30 transition-colors duration-200">
              <div className="flex items-start gap-5">
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <History size={18} className="text-primary" />
                  </div>
                  {index < mockAuditTrail.length - 1 && (
                    <div className="w-0.5 h-12 bg-border/50 mt-2" />
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground">{item.action}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                      <p className="text-xs text-muted-foreground mt-2.5">
                        By <span className="font-medium text-foreground/70">{item.actor}</span>
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-sm font-medium text-foreground">
                        {new Date(item.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(item.timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 bg-secondary border border-border/50 rounded-[20px] p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-foreground mb-3">About Audit Trail</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All actions are cryptographically signed and recorded. 
          This provides an immutable record of every verification, loan action, and status change 
          for compliance and dispute resolution purposes.
        </p>
      </div>
    </>
  )
}
