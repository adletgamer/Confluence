const footerLinks = [
  { label: "Docs", href: "#docs" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-primary-foreground/15 text-primary-foreground text-xs font-bold">
            Cx
          </span>
          <span className="text-sm font-semibold">Confluxi</span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} Confluxi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
