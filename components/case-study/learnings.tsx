interface LearningsProps {
  learnings: {
    title: string
    content: string
    points: string[]
  }
}

export function CaseStudyLearnings({ learnings }: LearningsProps) {
  return (
    <section className="py-12 md:py-20">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{learnings.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-8">{learnings.content}</p>

      {/* Learning Points */}
      <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-6 md:p-8">
        <ul className="space-y-4">
          {learnings.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2" />
              <span className="text-foreground-muted leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
