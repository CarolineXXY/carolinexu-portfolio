import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-10 md:py-14">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.02em] text-foreground no-underline transition-colors hover:text-warm-orange notranslate"
            translate="no"
          >
            Caroline Xu
          </Link>

          <p className="text-sm text-foreground-muted">© {currentYear} <span className="notranslate" translate="no">Caroline Xu</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
