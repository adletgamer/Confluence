import { cn } from "@/lib/utils"
import { type LoanStatus, type VerificationStatus, getStatusColor } from "@/lib/mock-data"

// Page Header
interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 pb-6 border-b border-border/50">
      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

// Metric Card
interface MetricCardProps {
  label: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
}

export function MetricCard({ label, value, subtitle, icon }: MetricCardProps) {
  return (
    <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-foreground tracking-tight">{value}</p>
          {subtitle && (
            <p className="mt-1.5 text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 rounded-[14px] bg-secondary flex items-center justify-center text-primary/60 ml-3 shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

// Status Badge
interface StatusBadgeProps {
  status: LoanStatus | VerificationStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusColors = {
    "pending": "bg-amber-50 text-amber-700 border-amber-200",
    "active": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "completed": "bg-blue-50 text-blue-700 border-blue-200",
    "verified": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "in-progress": "bg-blue-50 text-blue-700 border-blue-200",
    "rejected": "bg-red-50 text-red-700 border-red-200",
  }
  
  const colorClass = statusColors[status as keyof typeof statusColors] || statusColors["pending"]
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border capitalize transition-colors",
        colorClass,
        className
      )}
    >
      {status.replace("-", " ")}
    </span>
  )
}

// Section Container
interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {children}
      </div>
    </section>
  )
}

// Section Header
interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Feature Card
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card border border-border rounded-[20px] p-6 hover:shadow-md transition-all duration-200 hover:border-border">
      <div className="w-12 h-12 rounded-[12px] bg-secondary flex items-center justify-center text-primary/60 mb-5">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2.5">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

// Empty State
interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && (
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
