interface ResultsProps {
  results: {
    title: string
    content: string
    metrics: {
      value: string
      label: string
    }[]
  }
}

export function CaseStudyResults({ results }: ResultsProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{results.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-14">{results.content}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {results.metrics.map((metric, index) => (
          <div key={index} className="border border-border p-6 md:p-8 text-left">
            <p className="font-serif text-3xl md:text-4xl text-accent mb-3">{metric.value}</p>
            <p className="text-foreground-muted text-sm leading-[1.75]">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
