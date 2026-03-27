import Image from "next/image"

interface PersonasProps {
  personas: {
    title: string
    content: string
    personas: {
      name: string
      role: string
      goals: string[]
      painPoints: string[]
      image: string
    }[]
  }
}

export function CaseStudyPersonas({ personas }: PersonasProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{personas.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-14">{personas.content}</p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {personas.personas.map((persona) => (
          <div key={persona.name} className="border-t border-border pt-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted shrink-0">
                <Image src={persona.image || "/placeholder.svg"} alt={persona.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif">{persona.name}</h3>
                <p className="text-foreground-muted">{persona.role}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-label mb-3 text-foreground-muted">Goals</h4>
              <ul className="space-y-2">
                {persona.goals.map((goal, index) => (
                  <li key={index} className="text-foreground-muted flex items-start gap-2 leading-[1.75]">
                    <span className="text-foreground mt-0.5">✓</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-label mb-3 text-warm-orange">Pain Points</h4>
              <ul className="space-y-2">
                {persona.painPoints.map((pain, index) => (
                  <li key={index} className="text-foreground-muted flex items-start gap-2 leading-[1.75]">
                    <span className="text-warm-orange mt-0.5">×</span>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
