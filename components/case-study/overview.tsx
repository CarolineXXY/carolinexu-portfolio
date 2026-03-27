import type { CaseStudy } from "@/lib/data"

interface CaseStudyOverviewProps {
  study: CaseStudy
}

export function CaseStudyOverview({ study }: CaseStudyOverviewProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">Overview</h2>

      {study.disclaimer && (
        <div className="bg-muted/30 border border-border text-foreground-muted px-6 py-4 rounded-sm text-[13px] md:text-sm italic mb-12 max-w-3xl leading-[1.75]">
          {study.disclaimer}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
        <div>
          <h3 className="text-label mb-4 text-accent">The Challenge</h3>
          <p className="text-foreground-muted leading-[1.75]">{study.challenge}</p>
        </div>
        <div>
          <h3 className="text-label mb-4 text-accent">The Solution</h3>
          <p className="text-foreground-muted leading-[1.75]">{study.solution}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pt-12 border-t border-border">
        <div>
          <h4 className="text-label mb-3">Role</h4>
          <p className="text-foreground font-medium leading-[1.75]">{study.role}</p>
        </div>
        <div>
          <h4 className="text-label mb-3">Duration</h4>
          <p className="text-foreground font-medium leading-[1.75]">{study.duration}</p>
        </div>
        <div>
          <h4 className="text-label mb-3">Tools</h4>
          <p className="text-foreground font-medium leading-[1.75]">{study.tools.join(", ")}</p>
        </div>
        {/* <div>
          <h4 className="text-label mb-3">Team</h4>
          <ul className="text-foreground font-medium leading-[1.75]">
            {study.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  )
}
