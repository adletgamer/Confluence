import { CheckCircle2, Circle, Clock, Upload, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader, StatusBadge } from "@/components/shared"
import { mockVerificationItems } from "@/lib/mock-data"

function getStatusIcon(status: string) {
  switch (status) {
    case "verified":
      return <CheckCircle2 size={18} className="text-emerald-600" />
    case "in-progress":
      return <Clock size={18} className="text-blue-600" />
    default:
      return <Circle size={18} className="text-muted-foreground" />
  }
}

export default function VerificationPage() {
  const completedCount = mockVerificationItems.filter((item) => item.status === "verified").length
  const totalCount = mockVerificationItems.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  return (
    <>
      <PageHeader
        title="Verification Room"
        subtitle="Complete verification steps to strengthen your credit profile"
        action={
          <Button>
            <Upload size={16} className="mr-2" />
            Upload Document
          </Button>
        }
      />

      {/* Progress Overview */}
      <div className="bg-card border border-border rounded-xl p-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Verification Progress</p>
            <p className="text-2xl font-semibold text-foreground mt-1">
              {completedCount} of {totalCount} completed
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-accent">{progressPercent}%</span>
          </div>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Verification Checklist */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl">
            <div className="px-5 py-4 border-b border-border">
              <h2 className="text-base font-semibold text-foreground">Verification Checklist</h2>
            </div>
            <div className="divide-y divide-border">
              {mockVerificationItems.map((item) => (
                <div key={item.id} className="px-5 py-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0">
                      {getStatusIcon(item.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                        </div>
                        <StatusBadge status={item.status} className="shrink-0" />
                      </div>
                      {item.completedAt && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Completed on {new Date(item.completedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      )}
                      {item.status === "pending" && (
                        <Button size="sm" variant="outline" className="mt-3">
                          Start Verification
                        </Button>
                      )}
                      {item.status === "in-progress" && (
                        <Button size="sm" className="mt-3">
                          Continue
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips */}
          <div className="bg-secondary/50 border border-border rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle size={18} className="text-accent mt-0.5" />
              <h3 className="text-sm font-semibold text-foreground">Verification Tips</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Complete all steps to maximize your credit score
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Documents are stored securely and encrypted
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Verification results are recorded on-chain
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                You control who can view your verification status
              </li>
            </ul>
          </div>

          {/* Credit Impact */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Credit Impact</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Current Score</span>
                  <span className="font-medium text-foreground">742</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Potential Score</span>
                  <span className="font-medium text-emerald-600">785</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Complete remaining verifications to unlock
                </p>
              </div>
            </div>
          </div>

          {/* Supported Documents */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Supported Documents</h3>
            <div className="flex flex-wrap gap-2">
              {["PDF", "PNG", "JPG", "JSON"].map((type) => (
                <span key={type} className="px-2 py-1 text-xs bg-secondary rounded font-medium text-muted-foreground">
                  {type}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Max file size: 10MB per document
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
