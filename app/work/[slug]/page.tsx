import Link from "next/link"
import { caseStudies, getAdjacentProjects } from "@/lib/data"
import { CaseStudyHero } from "@/components/case-study/hero"
import { CaseStudyOverview } from "@/components/case-study/overview"
import { GenericCaseStudyBlock } from "@/components/case-study/block"
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
        <div className="max-w-md text-left">
          <h1 className="font-serif text-6xl md:text-8xl text-accent mb-4">404</h1>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Project Not Found</h2>
          <p className="text-foreground-muted mb-10 leading-[1.75]">
            Sorry, the case study you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-transparent text-foreground border-[1.5px] border-foreground transition-colors duration-300 hover:border-warm-orange hover:text-warm-orange no-underline"
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
      <CaseStudyHero study={study} />

      <div className="max-w-content px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12">
        <FadeIn>
          <CaseStudyOverview study={study} />
        </FadeIn>

        {study.blocks?.map((block, index) => (
          <FadeIn key={index}>
            <GenericCaseStudyBlock block={block} />
          </FadeIn>
        ))}

        {study.statusBanner && (
          <FadeIn>
            <div className="mt-16 bg-white border border-border p-8 rounded-sm text-center shadow-sm">
              <h4 className="text-label mb-6 text-accent">Project Status</h4>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                {study.statusBanner.map((item, idx) => {
                  const isDone = item.includes("✓");
                  const label = item.replace("✓", "").replace("— coming next", "").trim();
                  return (
                    <div key={idx} className="flex items-center gap-2 font-sans">
                      <span className={`w-2.5 h-2.5 rounded-full ${isDone ? 'bg-emerald-500' : 'bg-amber-500/80 animate-pulse'}`} />
                      <span className={`font-medium ${isDone ? 'text-foreground' : 'text-foreground-muted'}`}>
                        {label}
                      </span>
                      {isDone ? (
                        <span className="text-emerald-500 text-sm font-bold">✓</span>
                      ) : (
                        <span className="text-[11px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 border border-amber-200/50 rounded-sm">
                          In Progress
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        )}
      </div>

      <FadeIn>
        <ProjectNavigation prev={prev} next={next} />
      </FadeIn>
    </main>
  )
}
