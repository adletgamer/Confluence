"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WalletConnectButton } from "@/components/wallet-connect-button"

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#workflow", label: "Workflow" },
  { href: "#developers", label: "Developers" },
  { href: "#docs", label: "Docs" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Cx</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Confluxi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <WalletConnectButton />
            <Button size="sm" asChild className="rounded-[10px] font-semibold shadow-lg shadow-primary/30">
              <Link href="/dashboard">Demo →</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-2.5 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard">View Demo</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/dashboard">Open App</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
