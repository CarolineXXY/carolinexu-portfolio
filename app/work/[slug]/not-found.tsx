import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-left">
        <h1 className="font-serif text-6xl md:text-8xl text-accent mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Project Not Found</h2>
        <p className="text-foreground-muted mb-10 leading-[1.75]">
          Sorry, the case study you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-transparent text-foreground border-[1.5px] border-foreground transition-colors duration-300 hover:border-warm-orange hover:text-warm-orange no-underline"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Back to Work
        </Link>
      </div>
    </main>
  )
}
