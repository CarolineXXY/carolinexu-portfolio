import Image from "next/image"

interface ScreensProps {
  screens: {
    title: string
    content: string
    images: {
      src: string
      caption: string
    }[]
  }
}

export function CaseStudyScreens({ screens }: ScreensProps) {
  return (
    <section className="section-y border-b border-border">
      <h2 className="font-serif mb-6">{screens.title}</h2>

      <p className="text-foreground-muted leading-[1.75] max-w-3xl mb-14">{screens.content}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {screens.images.map((screen, index) => (
          <div key={index}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-[4px] mb-4 bg-muted">
              <Image
                src={screen.src || "/placeholder.svg"}
                alt={screen.caption}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground-muted text-left leading-snug">{screen.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
