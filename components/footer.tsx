import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo - using accent color on dark bg passes WCAG */}
          <Link href="/" className="font-mono text-lg font-bold text-white hover:text-accent transition-colors">
            Caroline Xu
          </Link>

          <p className="text-sm text-white/70">© {currentYear} Caroline Xu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
