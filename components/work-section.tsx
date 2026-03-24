"use client"

import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import { FadeIn } from "./fade-in"

export function WorkSection() {
  return (
    <section id="work" className="section-y bg-background border-t border-border">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 md:mb-24">
          <p className="text-label mb-4">Selected Work</p>
          <h2 className="font-serif mb-0">Case Studies</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 80}>
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
