"use client"

import Image from "next/image"
import { assetPath } from '../lib/utils'

interface Tool {
  name: string
  logo: string
}

interface ToolsCarouselProps {
  tools: Tool[]
}

export function ToolsCarousel({ tools }: ToolsCarouselProps) {
  // Triple the tools array to ensure enough content for seamless CSS scrolling on ultrawide screens
  const content = [...tools, ...tools, ...tools]

  return (
    <div className="relative w-full overflow-hidden border-y border-border py-8 bg-background">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex w-max animate-marquee-left"
        style={{ animationDuration: "80s" }}
      >
        <div className="flex gap-16 sm:gap-24 px-8 sm:px-12">
          {content.map((tool, index) => (
            <div
              key={`set1-${tool.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  src={assetPath(tool.logo)}
                  alt={`${tool.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-16 sm:gap-24 px-8 sm:px-12">
          {content.map((tool, index) => (
            <div
              key={`set2-${tool.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
