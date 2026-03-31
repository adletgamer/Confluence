"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Protocol", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Conflux", href: "#conflux" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-primary text-primary-foreground text-xs font-bold">Cx</span>
          Confluxi
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
          <a
            href="#connect"
            className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Connect Wallet
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="mt-2 text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-center"
          >
            Connect Wallet
          </a>
        </nav>
      )}
    </header>
  )
}
