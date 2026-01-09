"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <p
            className={`font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            UX/UI Designer
          </p>

          {/* Main Heading */}
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 hero-typing">
            Hi, I&apos;m <span className="text-accent">Caroline Xu</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            I&apos;m passionate about user-centred design, and ready to bring fresh, creative ideas to solve real-world
            problems.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#work"
              className="px-8 py-3.5 bg-accent-wcag text-white font-medium rounded-lg hover:bg-accent hover:text-[#cf6766] transition-all hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 border-2 border-white/50 text-white font-medium rounded-lg hover:border-white hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to work section"
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </Link>
    </section>
  )
}
