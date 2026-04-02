"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, ShieldCheck, History, HelpCircle, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const mainNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/loans/new", label: "Loans", icon: FileText },
  { href: "/verification", label: "Verification", icon: ShieldCheck },
  { href: "/audit", label: "Audit Trail", icon: History },
]

const bottomNav = [
  { href: "#help", label: "Help", icon: HelpCircle },
  { href: "#security", label: "Security", icon: Lock },
]

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname.startsWith(href)
  }

  return (
    <aside className="w-60 bg-background border-r border-border flex flex-col h-screen sticky top-0 shadow-sm">
      {/* Logo & Branding */}
      <div className="h-16 flex items-center px-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">Cx</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-foreground">Confluxi</span>
            <span className="text-xs text-muted-foreground">Credit</span>
          </div>
        </Link>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-4 py-5">
        <div className="space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:shadow-sm"
                )}
              >
                <Icon size={19} className="shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom Nav */}
      <div className="px-4 pb-5 border-t border-border/50 pt-4">
        <div className="space-y-1">
          {bottomNav.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
              >
                <Icon size={19} className="shrink-0" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
