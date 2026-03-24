"use client"

import Image from "next/image"
import { skills, designTools } from "@/lib/data"
import { FadeIn } from "./fade-in"
import { ToolsCarousel } from "./tools-carousel"
import { SkillsMarquee } from "./skills-marquee"
import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="section-y bg-background border-t border-border overflow-hidden">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20 md:mb-28">
          <FadeIn>
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:mt-40">
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
              <h2 className="font-serif mb-8">Designing with purpose</h2>

              <div className="space-y-6 text-foreground-muted leading-[1.75] text-base md:text-lg">
                <p>
                  I&apos;m Caroline, a UX/UI designer. I graduated from the University of Queensland with a Master’s in Interaction Design, but before that,
                  I studied Turkish (yes, you read that right!). What began as a passion for
                  language turned into a deeper curiosity about how people interact, communicate, and connect. That
                  curiosity eventually led me to a new kind of interaction — the one between humans and the digital world.
                </p>
                <p>
                  To me, it's all about understanding people and creating intuitive, meaningful ways for them to connect.
                  I combine research-driven insights with creative problem-solving to design experiences that are both
                  enjoyable and functional. Let's create something amazing together!
                </p>
              </div>

              <div className="mt-8 md:mt-12">
                <a
                  href="https://drive.google.com/file/d/1waAvNr8FSLXwb9j4OeNm1X_si_4Z-p1a/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-[8px] font-sans font-medium text-[15px] md:text-[16px] tracking-[0.04em] text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] rounded-[2px] px-[32px] py-[13px] bg-transparent transition-colors duration-300 hover:border-[#E8602C] hover:text-[#E8602C] no-underline"
                >
                  View Resume
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#E8602C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={200}>
        <div className="mb-10 md:mb-10">
          {/* <div className="max-w-content px-4 sm:px-6 lg:px-8 mb-8">
            <h3 className="text-label text-foreground">Design Tools</h3>
          </div> */}
          <div className="w-full">
            <ToolsCarousel tools={designTools} />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={280}>
        <div>
          {/* <div className="max-w-content px-4 sm:px-6 lg:px-8 mb-8">
            <h3 className="text-label text-foreground">Core Skills</h3>
          </div> */}
          <div className="w-full">
            <SkillsMarquee skills={skills} />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
