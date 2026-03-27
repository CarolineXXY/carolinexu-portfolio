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
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{process.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-14">{process.content}</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {process.steps.map((step, index) => (
          <div key={index} className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 border-[1.5px] border-foreground text-foreground font-medium text-sm flex items-center justify-center rounded-full">
              {index + 1}
            </div>
            <div>
              <h3 className="font-serif mb-2">{step.title}</h3>
              <p className="text-foreground-muted leading-[1.75]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {process.images && process.images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {process.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-muted">
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
