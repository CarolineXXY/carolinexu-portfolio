"use client"

import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/data"
import { caseStudies } from "@/lib/data"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasCaseStudy = project.id in caseStudies
  const href = hasCaseStudy ? `/work/${project.id}` : `#${project.id}`

  return (
    <Link
      href={href}
      className="group block bg-transparent pt-6 border-t border-border transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] overflow-hidden bg-muted rounded-sm">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
          priority={index < 2}
        />
      </div>

      {/* Content */}
      <div className="pt-5 pb-2">
        <p className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-warm-orange mb-3">{project.category}</p>

        <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-foreground-muted leading-[1.75]">{project.description}</p>

        <span className="inline-block mt-4 text-sm font-medium text-foreground no-underline transition-colors duration-300 group-hover:text-warm-orange group-hover:underline underline-offset-[0.2em] decoration-warm-orange">
          View project
        </span>
      </div>
    </Link>
  )
}
