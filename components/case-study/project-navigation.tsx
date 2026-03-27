import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/data"

interface ProjectNavigationProps {
  prev: Project | null
  next: Project | null
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <section className="border-t border-border bg-background">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.id}`}
              className="group flex items-center gap-4 py-10 md:py-14 border-b md:border-b-0 md:border-r border-border transition-colors hover:text-warm-orange"
            >
              <ArrowLeft size={22} strokeWidth={1.5} className="text-foreground-muted shrink-0" />
              <div>
                <span className="text-label block mb-1">Previous</span>
                <h3 className="font-serif text-foreground group-hover:text-warm-orange transition-colors">
                  {prev.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block py-10 md:py-14 border-r border-border" />
          )}

          {next ? (
            <Link
              href={`/work/${next.id}`}
              className="group flex items-center justify-end gap-4 py-10 md:py-14 text-right transition-colors hover:text-warm-orange"
            >
              <div>
                <span className="text-label block mb-1">Next</span>
                <h3 className="font-serif text-foreground group-hover:text-warm-orange transition-colors">
                  {next.title}
                </h3>
              </div>
              <ArrowRight size={22} strokeWidth={1.5} className="text-foreground-muted shrink-0" />
            </Link>
          ) : (
            <Link
              href="/#work"
              className="group flex items-center justify-end gap-4 py-10 md:py-14 text-right transition-colors hover:text-warm-orange"
            >
              <div>
                <span className="text-label block mb-1">View All</span>
                <h3 className="font-serif text-foreground group-hover:text-warm-orange transition-colors">
                  Back to Portfolio
                </h3>
              </div>
              <ArrowRight size={22} strokeWidth={1.5} className="text-foreground-muted shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
