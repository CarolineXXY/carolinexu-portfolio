"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  threshold?: number
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)"
      case "down":
        return "translateY(-30px)"
      case "left":
        return "translateX(30px)"
      case "right":
        return "translateX(-30px)"
      case "none":
        return "none"
      default:
        return "translateY(30px)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
