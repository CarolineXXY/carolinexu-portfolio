"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
      className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-wcag text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
            View Case Study <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-wcag mb-2">{project.category}</p>

        {/* Title */}
        <h3 className="font-mono text-lg md:text-xl font-semibold text-primary-dark mb-2 group-hover:text-accent-wcag transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-muted text-xs font-medium text-foreground-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
