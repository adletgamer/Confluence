export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary-foreground/12 text-primary-foreground text-[11px] font-bold">
            Cx
          </span>
          <div>
            <span className="text-sm font-bold block">Confluxi</span>
            <span className="text-[11px] text-primary-foreground/40">On-chain credit scoring</span>
          </div>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          <a
            href="#developers"
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-medium"
          >
            Docs
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@confluxi.io"
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Legal */}
        <p className="text-xs text-primary-foreground/30">
          &copy; 2025 Confluxi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
