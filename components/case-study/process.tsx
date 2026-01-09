import Image from "next/image"

interface ProcessProps {
  process: {
    title: string
    content: string
    steps: {
      title: string
      description: string
    }[]
    images?: string[]
  }
}

export function CaseStudyProcess({ process }: ProcessProps) {
  return (
    <section className="py-12 md:py-20 border-b border-border">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{process.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-10">{process.content}</p>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {process.steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-dark text-white font-mono font-bold rounded-lg flex items-center justify-center">
              {index + 1}
            </div>
            <div>
              <h3 className="font-mono text-lg font-semibold text-primary-dark mb-2">{step.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Images */}
      {process.images && process.images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {process.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Process image ${index + 1}`}
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
