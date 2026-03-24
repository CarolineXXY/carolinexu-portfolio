"use client"

import Image from "next/image"
import { skills, designTools } from "@/lib/data"
import { FadeIn } from "./fade-in"
import { ToolsCarousel } from "./tools-carousel"

export function AboutSection() {
  return (
    <section id="about" className="section-y bg-background border-t border-border">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20 md:mb-28">
          <FadeIn>
            <div className="relative max-w-md">
              <div className="aspect-[3/4] overflow-hidden bg-muted rounded-[4px] relative">
                <Image
                  src="/myprofile.JPG"
                  alt="Caroline Xu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <p className="text-label mb-4">About Me</p>
              <h2 className="font-serif mb-8">Designing with empathy &amp; purpose</h2>

              <div className="space-y-6 text-foreground-muted leading-[1.75] text-base md:text-lg">
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
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="mb-16 md:mb-24">
            <h3 className="text-label mb-8 text-foreground">Design Tools</h3>
            <ToolsCarousel tools={designTools} />
          </div>
        </FadeIn>

        <FadeIn delay={280}>
          <div>
            <h3 className="text-label mb-8 text-foreground">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-foreground-muted border border-border bg-background"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
