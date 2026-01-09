import Image from "next/image"
import type { CaseStudy } from "@/lib/data"

interface CaseStudyHeroProps {
  study: CaseStudy
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative bg-primary-dark pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-mono uppercase tracking-wider rounded-full mb-4">
          {study.category}
        </span>

        {/* Title */}
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance max-w-4xl">
          {study.title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">{study.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {study.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
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
