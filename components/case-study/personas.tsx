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
    <section className="py-12 md:py-20 border-b border-border">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{personas.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-10">{personas.content}</p>

      {/* Persona Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {personas.personas.map((persona) => (
          <div key={persona.name} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            {/* Persona Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                <Image src={persona.image || "/placeholder.svg"} alt={persona.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-mono text-lg font-semibold text-primary-dark">{persona.name}</h3>
                <p className="text-foreground-muted text-sm">{persona.role}</p>
              </div>
            </div>

            {/* Goals */}
            <div className="mb-4">
              <h4 className="text-sm font-mono text-secondary uppercase tracking-wider mb-2">Goals</h4>
              <ul className="space-y-1">
                {persona.goals.map((goal, index) => (
                  <li key={index} className="text-foreground-muted text-sm flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div>
              <h4 className="text-sm font-mono text-accent-wcag uppercase tracking-wider mb-2">Pain Points</h4>
              <ul className="space-y-1">
                {persona.painPoints.map((pain, index) => (
                  <li key={index} className="text-foreground-muted text-sm flex items-start gap-2">
                    <span className="text-accent-wcag mt-1">×</span>
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
