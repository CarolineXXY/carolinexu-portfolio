interface LearningsProps {
  learnings: {
    title: string
    content: string
    points: string[]
  }
}

export function CaseStudyLearnings({ learnings }: LearningsProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{learnings.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-10">{learnings.content}</p>

      <ul className="space-y-6 max-w-3xl border-t border-border pt-10">
        {learnings.points.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-foreground-muted leading-[1.75]">
            <span className="text-accent font-medium shrink-0">{String(index + 1).padStart(2, "0")}</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
