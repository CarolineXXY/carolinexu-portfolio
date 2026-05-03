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
  const isDeactivated = project.status === "coming-soon" || (!project.status && index >= 3)
  const href = hasCaseStudy ? `/work/${project.id}` : `#${project.id}`

  const CardWrapper = isDeactivated ? "div" : Link
  // Create conditional props to avoid passing href to div
  const wrapperProps = isDeactivated ? {} : { href }

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group block bg-transparent pt-6 border-t border-border transition-all duration-300 ${isDeactivated ? "opacity-80 cursor-default" : "hover:-translate-y-1 cursor-pointer"}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] overflow-hidden bg-muted rounded-sm">
        {(isDeactivated || project.status === "in-progress") && (
          <div className="absolute top-4 right-4 z-20 bg-background/95 backdrop-blur-sm px-[10px] py-[4px] rounded-sm font-sans text-[10px] md:text-[11px] font-medium tracking-[0.08em] uppercase text-foreground shadow-sm">
            {project.status === "in-progress" ? "In Progress" : "Coming Soon..."}
          </div>
        )}
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover ${isDeactivated ? "grayscale-[60%]" : ""}`}
          sizes="(max-width: 768px) 100vw, 500px"
          priority={index < 2}
        />
      </div>

      {/* Content */}
      <div className="pt-5 pb-2">
        <p className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-warm-orange mb-3">{project.category}</p>

        <h3 className="font-serif mb-3 transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="text-foreground-muted leading-[1.75]">{project.description}</p>

        {!isDeactivated && (
          <span className="inline-block mt-4 text-sm font-medium text-foreground no-underline transition-colors duration-300 group-hover:text-warm-orange group-hover:underline underline-offset-[0.2em] decoration-warm-orange">
            View project
          </span>
        )}
      </div>
    </CardWrapper>
  )
}
