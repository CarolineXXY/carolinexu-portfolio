import type { CaseStudy } from "@/lib/data"
import React from "react"

const DO_NOT_TRANSLATE = ["Google Stitch", "Stitch", "Claude", "Figma"]

function formatText(text: string) {
  if (!text) return text;
  const regex = new RegExp(`(${DO_NOT_TRANSLATE.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (DO_NOT_TRANSLATE.includes(part)) {
      return <span key={i} className="notranslate" translate="no">{part}</span>;
    }
    return part;
  });
}

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

      {study.introduction && (
        <div className="mb-12 max-w-3xl">
          <p className="text-lg md:text-xl font-light text-foreground-muted leading-[1.6]">
            {study.introduction}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
        <div>
          <h3 className="text-label mb-4 text-accent">The Challenge</h3>
          <p className="text-foreground-muted leading-[1.75]">{formatText(study.challenge)}</p>
        </div>
        <div>
          <h3 className="text-label mb-4 text-accent">The Solution</h3>
          <p className="text-foreground-muted leading-[1.75]">{formatText(study.solution)}</p>
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
          <p className="text-foreground font-medium leading-[1.75]">
            {study.tools.map((tool, i) => (
              <React.Fragment key={i}>
                {i > 0 && " · "}
                {DO_NOT_TRANSLATE.includes(tool) 
                  ? <span className="notranslate" translate="no">{tool}</span>
                  : tool
                }
              </React.Fragment>
            ))}
          </p>
        </div>
        {study.status ? (
          <div>
            <h4 className="text-label mb-3">Status</h4>
            <p className="text-foreground font-medium leading-[1.75] flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${
                study.status.toLowerCase().includes('in progress') || study.status.toLowerCase().includes('in-progress') 
                  ? 'bg-amber-500 animate-pulse' 
                  : 'bg-emerald-500'
              } flex-shrink-0`} />
              {study.status}
            </p>
          </div>
        ) : study.team && study.team.length > 0 ? (
          <div>
            <h4 className="text-label mb-3">Team</h4>
            <ul className="text-foreground font-medium leading-[1.75] text-sm">
              {study.team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {study.roleDescription && (
        <div className="mt-12 bg-white border border-border p-6 md:p-8 rounded-sm shadow-sm">
          <h4 className="text-label mb-3 text-accent">Role Description</h4>
          <p className="text-foreground-muted leading-[1.75]">{formatText(study.roleDescription)}</p>
        </div>
      )}
    </section>
  )
}
