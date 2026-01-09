import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-mono text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="font-mono text-xl md:text-2xl font-semibold text-primary-dark mb-4">Project Not Found</h2>
        <p className="text-foreground-muted mb-8 leading-relaxed">
          Sorry, the case study you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-wcag text-white rounded-lg font-medium hover:bg-accent transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Work
        </Link>
      </div>
    </main>
  )
}
