"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 bg-transparent text-foreground border-[1.5px] border-foreground transition-colors duration-300 hover:border-warm-orange hover:text-warm-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowUp size={20} strokeWidth={1.5} />
    </button>
  )
}
