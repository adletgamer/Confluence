import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Cx</span>
            </div>
            <span className="font-semibold text-lg">Confluxi</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#product" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Product
            </a>
            <a href="#workflow" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Workflow
            </a>
            <a href="#developers" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Developers
            </a>
            <a href="#docs" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Docs
            </a>
            <Link href="/dashboard" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Open App
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-primary-foreground/50">
          <p>2026 Confluxi. All rights reserved.</p>
          <p>Built for programmable finance.</p>
        </div>
      </div>
    </footer>
  )
}
