import Image from "next/image"

interface ResearchProps {
  research: {
    title: string
    content: string
    findings: string[]
    images?: string[]
  }
}

export function CaseStudyResearch({ research }: ResearchProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{research.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-12">{research.content}</p>

      {research.images && research.images.length > 0 && (
        <div className="flex flex-col gap-10 mb-16">
          {research.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-[4px] bg-muted"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Research image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="pt-12 border-t border-border max-w-3xl">
        <h3 className="text-label mb-8 text-foreground">Key Findings</h3>
        <ul className="space-y-6">
          {research.findings.map((finding, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 border-[1.5px] border-foreground text-foreground text-sm font-medium flex items-center justify-center rounded-full">
                {index + 1}
              </span>
              <span className="text-foreground-muted leading-[1.75] pt-1">{finding}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
