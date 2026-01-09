import Link from "next/link"
import { caseStudies, getAdjacentProjects } from "@/lib/data"
import { CaseStudyHero } from "@/components/case-study/hero"
import { CaseStudyOverview } from "@/components/case-study/overview"
import { CaseStudyResearch } from "@/components/case-study/research"
import { CaseStudyPersonas } from "@/components/case-study/personas"
import { CaseStudyProcess } from "@/components/case-study/process"
import { CaseStudyScreens } from "@/components/case-study/screens"
import { CaseStudyResults } from "@/components/case-study/results"
import { CaseStudyLearnings } from "@/components/case-study/learnings"
import { ProjectNavigation } from "@/components/case-study/project-navigation"
import { FadeIn } from "@/components/fade-in"

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) return { title: "Project Not Found" }

  return {
    title: `${study.title} | Caroline Xu`,
    description: study.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug

  const study = slug ? caseStudies[slug] : null

  if (!study) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-mono text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="font-mono text-xl md:text-2xl font-semibold text-primary-dark mb-4">Project Not Found</h2>
          <p className="text-foreground-muted mb-8 leading-relaxed">
            Sorry, the case study you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-wcag text-white rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Back to Work
          </Link>
        </div>
      </main>
    )
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <CaseStudyHero study={study} />

      {/* Breadcrumb - fade in */}
      <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-sm text-foreground-muted" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent-wcag transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li>
              <Link href="/#work" className="hover:text-accent-wcag transition-colors">
                Work
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">{study.title}</li>
          </ol>
        </nav>
      </FadeIn>

      {/* Content Sections - each section fades in on scroll */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn>
          <CaseStudyOverview study={study} />
        </FadeIn>

        {study.sections.research && (
          <FadeIn>
            <CaseStudyResearch research={study.sections.research} />
          </FadeIn>
        )}

        {study.sections.personas && (
          <FadeIn>
            <CaseStudyPersonas personas={study.sections.personas} />
          </FadeIn>
        )}

        {study.sections.process && (
          <FadeIn>
            <CaseStudyProcess process={study.sections.process} />
          </FadeIn>
        )}

        {study.sections.screens && (
          <FadeIn>
            <CaseStudyScreens screens={study.sections.screens} />
          </FadeIn>
        )}

        {study.sections.results && (
          <FadeIn>
            <CaseStudyResults results={study.sections.results} />
          </FadeIn>
        )}

        {study.sections.learnings && (
          <FadeIn>
            <CaseStudyLearnings learnings={study.sections.learnings} />
          </FadeIn>
        )}
      </div>

      {/* Project Navigation */}
      <FadeIn>
        <ProjectNavigation prev={prev} next={next} />
      </FadeIn>
    </main>
  )
}
