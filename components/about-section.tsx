import Image from "next/image"
import { skills } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/20">
              <Image
                src="/professional-portrait-of-asian-woman-designer.jpg"
                alt="Caroline Xu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-wcag mb-3">About Me</p>
            <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Designing with empathy & purpose
            </h2>

            <div className="space-y-4 text-base md:text-lg text-foreground-muted leading-relaxed mb-8">
              <p>
                I&apos;m a UX/UI designer who believes great design starts with understanding people. My approach
                combines research-driven insights with creative problem-solving to craft experiences that are both
                beautiful and functional.
              </p>
              <p>
                With a background in visual design and a passion for human-centered methodology, I bridge the gap
                between user needs and business goals—creating designs that make a real impact.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary-dark mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card text-sm font-medium text-foreground-muted rounded-lg border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
