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
    <section className="py-12 md:py-20 border-b border-border">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{research.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-8">{research.content}</p>

      {/* Key Findings */}
      <div className="bg-muted rounded-xl p-6 md:p-8 mb-10">
        <h3 className="font-mono text-lg font-semibold text-accent-wcag mb-4">Key Findings</h3>
        <ul className="space-y-3">
          {research.findings.map((finding, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-accent-wcag text-white text-sm font-mono rounded-full flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
              <span className="text-foreground-muted leading-relaxed">{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Research Images */}
      {research.images && research.images.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {research.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
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
    </section>
  )
}
