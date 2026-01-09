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
    <section className="py-12 md:py-20 border-b border-border">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{results.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-10">{results.content}</p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {results.metrics.map((metric, index) => (
          <div key={index} className="bg-primary-dark rounded-xl p-6 text-center">
            <p className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</p>
            <p className="text-white/80 text-sm leading-snug">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
