import Image from "next/image"
import type { CaseStudy } from "@/lib/data"

interface CaseStudyHeroProps {
  study: CaseStudy
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative bg-background pt-28 pb-12 md:pt-32 md:pb-16 border-b border-border">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-label mb-6">
          <span className="text-accent">{study.category}</span>
        </p>

        <h1 className="font-serif mb-6 max-w-[20ch]">{study.title}</h1>

        <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mb-10 leading-[1.75]">{study.description}</p>

        <div className="flex flex-wrap gap-2 mb-12">
          {study.tags.map((tag) => (
            <span key={tag} className="text-label text-foreground-muted border border-border px-3 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[4px]">
          <Image
            src={study.heroImage || "/placeholder.svg"}
            alt={`${study.title} hero image`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
