"use client"

import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import { FadeIn } from "./fade-in"

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="max-w-2xl mb-12 md:mb-16">
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-wcag mb-3">Selected Work</p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-4">Case Studies</h2>
        </FadeIn>

        {/* Projects Grid - staggered fade-in for each card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100} direction="up">
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
