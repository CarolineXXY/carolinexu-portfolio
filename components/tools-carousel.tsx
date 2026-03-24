"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Tool {
  name: string
  logo: string
}

interface ToolsCarouselProps {
  tools: Tool[]
}

export function ToolsCarousel({ tools }: ToolsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused])

  const duplicatedTools = [...tools, ...tools]

  return (
    <div className="relative w-full overflow-hidden border-y border-border py-2">
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
