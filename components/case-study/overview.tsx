import type { CaseStudy } from "@/lib/data"

interface CaseStudyOverviewProps {
  study: CaseStudy
}

export function CaseStudyOverview({ study }: CaseStudyOverviewProps) {
  return (
    <section className="py-12 md:py-20 border-b border-border">
      {/* Overview Title */}
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-8">Overview</h2>

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <div>
          <h3 className="font-mono text-lg font-semibold text-accent-wcag mb-4">The Challenge</h3>
          <p className="text-foreground-muted leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <h3 className="font-mono text-lg font-semibold text-accent-wcag mb-4">The Solution</h3>
          <p className="text-foreground-muted leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 bg-muted rounded-xl">
        <div>
          <h4 className="text-sm font-mono text-foreground-muted uppercase tracking-wider mb-2">Role</h4>
          <p className="text-foreground font-medium">{study.role}</p>
        </div>
        <div>
          <h4 className="text-sm font-mono text-foreground-muted uppercase tracking-wider mb-2">Duration</h4>
          <p className="text-foreground font-medium">{study.duration}</p>
        </div>
        <div>
          <h4 className="text-sm font-mono text-foreground-muted uppercase tracking-wider mb-2">Tools</h4>
          <p className="text-foreground font-medium">{study.tools.join(", ")}</p>
        </div>
        <div>
          <h4 className="text-sm font-mono text-foreground-muted uppercase tracking-wider mb-2">Team</h4>
          <ul className="text-foreground font-medium">
            {study.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
