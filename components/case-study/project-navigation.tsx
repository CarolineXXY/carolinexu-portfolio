import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/data"

interface ProjectNavigationProps {
  prev: Project | null
  next: Project | null
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <section className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2">
          {/* Previous Project */}
          {prev ? (
            <Link
              href={`/work/${prev.id}`}
              className="group flex items-center gap-4 p-6 md:p-10 border-b md:border-b-0 md:border-r border-border hover:bg-card transition-colors"
            >
              <ArrowLeft
                size={24}
                className="text-foreground-muted group-hover:text-accent-wcag group-hover:-translate-x-1 transition-all"
              />
              <div>
                <span className="text-sm text-foreground-muted uppercase tracking-wider">Previous</span>
                <h3 className="font-mono text-lg font-semibold text-primary-dark group-hover:text-accent-wcag transition-colors">
                  {prev.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block p-6 md:p-10 border-r border-border" />
          )}

          {/* Next Project */}
          {next ? (
            <Link
              href={`/work/${next.id}`}
              className="group flex items-center justify-end gap-4 p-6 md:p-10 hover:bg-card transition-colors text-right"
            >
              <div>
                <span className="text-sm text-foreground-muted uppercase tracking-wider">Next</span>
                <h3 className="font-mono text-lg font-semibold text-primary-dark group-hover:text-accent-wcag transition-colors">
                  {next.title}
                </h3>
              </div>
              <ArrowRight
                size={24}
                className="text-foreground-muted group-hover:text-accent-wcag group-hover:translate-x-1 transition-all"
              />
            </Link>
          ) : (
            <Link
              href="/#work"
              className="group flex items-center justify-end gap-4 p-6 md:p-10 hover:bg-card transition-colors text-right"
            >
              <div>
                <span className="text-sm text-foreground-muted uppercase tracking-wider">View All</span>
                <h3 className="font-mono text-lg font-semibold text-primary-dark group-hover:text-accent-wcag transition-colors">
                  Back to Portfolio
                </h3>
              </div>
              <ArrowRight
                size={24}
                className="text-foreground-muted group-hover:text-accent-wcag group-hover:translate-x-1 transition-all"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
