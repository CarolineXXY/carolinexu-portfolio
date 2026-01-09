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
    <section className="py-12 md:py-20 border-b border-border">
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary-dark mb-6">{screens.title}</h2>

      <p className="text-foreground-muted leading-relaxed max-w-3xl mb-10">{screens.content}</p>

      {/* Screens Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {screens.images.map((screen, index) => (
          <div key={index} className="group">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg mb-3 bg-muted">
              <Image
                src={screen.src || "/placeholder.svg"}
                alt={screen.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-foreground-muted text-center leading-snug">{screen.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
