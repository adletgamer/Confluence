const footerLinks = [
  { label: "Docs", href: "#developers" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

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
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-xs text-primary-foreground/30">
          &copy; {new Date().getFullYear()} Confluxi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
