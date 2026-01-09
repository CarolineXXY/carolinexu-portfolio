import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-wcag mb-3">Selected Work</p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-4">Case Studies</h2>
          <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
            A selection of projects showcasing my approach to solving design challenges through research, iteration, and
            user-centered thinking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
