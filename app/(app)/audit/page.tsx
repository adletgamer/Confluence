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
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-sm text-muted-foreground">Total Events</p>
          <p className="text-2xl font-semibold text-foreground mt-1">{mockAuditTrail.length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-sm text-muted-foreground">This Week</p>
          <p className="text-2xl font-semibold text-foreground mt-1">3</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-sm text-muted-foreground">Verified Actions</p>
          <p className="text-2xl font-semibold text-foreground mt-1">100%</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-card border border-border rounded-xl">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-base font-semibold text-foreground">Activity Timeline</h2>
        </div>
        <div className="divide-y divide-border">
          {mockAuditTrail.map((item, index) => (
            <div key={item.id} className="px-5 py-5">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                    <History size={16} className="text-muted-foreground" />
                  </div>
                  {index < mockAuditTrail.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-border" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">{item.action}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.details}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        By {item.actor}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-sm text-foreground">
                        {new Date(item.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                      <p className="text-xs text-muted-foreground">
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
      <div className="mt-6 bg-secondary/50 border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-2">About Audit Trail</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All actions are cryptographically signed and recorded on the Conflux network. 
          This provides an immutable record of every verification, loan action, and status change 
          for compliance and dispute resolution purposes.
        </p>
      </div>
    </>
  )
}
