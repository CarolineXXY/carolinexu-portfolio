"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const roles = [
  { label: "UX/UI Designer", color: "#E8602C" },
  { label: "UX Researcher", color: "#C0763A" },
  { label: "Interaction Designer", color: "#2D6A4F" },
  { label: "Product Designer", color: "#4A6FA5" },
  { label: "Developer", color: "#8B5E83" },
]

function RoleWord() {
  const [active, setActive] = useState<number | null>(null)
  const [displayed, setDisplayed] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (active === null) return
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setDisplayed(prev => (prev + 1) % roles.length)
        setOpacity(1)
      }, 200)
    }, 900)
    return () => clearInterval(interval)
  }, [active])

  const isHovered = active !== null

  return (
    <span
      className="font-serif italic cursor-default transition-all duration-300 text-[clamp(28px,5vw,48px)] md:text-[clamp(32px,4vw,52px)]"
      style={{
        color: isHovered ? roles[displayed].color : "#D8D0C8",
        opacity: opacity,
        transition: "color 0.3s, opacity 0.2s",
        borderBottom: isHovered ? "none" : "2px solid #D8D0C8",
        paddingBottom: isHovered ? "0" : "2px",
      }}
      onMouseEnter={() => setActive(displayed)}
      onMouseLeave={() => {
        setActive(null)
        setOpacity(1)
      }}
    >
      {isHovered ? roles[displayed].label : "designer?"}
    </span>
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6]">
      {/* BACKGROUND BLOBS (z-index 0) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* 1. Large radial glow — top right corner */}
        <div
          className="absolute rounded-full w-[294px] h-[294px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]"
          style={{
            background: "radial-gradient(circle, #E8602C22 0%, #E8602C08 45%, transparent 70%)",
            top: "-120px",
            right: "-80px"
          }}
        />
        {/* 2. Small warm glow — bottom left */}
        <div
          className="absolute rounded-full w-[154px] h-[154px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px]"
          style={{
            background: "radial-gradient(circle, #C0763A14 0%, transparent 70%)",
            bottom: "20px",
            left: "-60px"
          }}
        />
        {/* 3. Large outline ring — top right */}
        <div
          className="absolute rounded-full w-[224px] h-[224px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
          style={{
            border: "0.5px solid #F0EBE3",
            top: "-160px",
            right: "-30px"
          }}
        />
        {/* 4. Medium outline ring */}
        <div
          className="absolute rounded-full w-[126px] h-[126px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px]"
          style={{
            border: "0.8px solid #E8E3DC",
            top: "-50px",
            right: "120px"
          }}
        />
        {/* 5. Small outline ring — bottom right */}
        <div
          className="absolute rounded-full w-[56px] h-[56px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]"
          style={{
            border: "0.8px solid #E8E3DC",
            bottom: "60px",
            right: "60px"
          }}
        />
      </div>

      {/* BOTTOM ABSOLUTE LAYER FOR SCROLL & BADGE */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full max-w-[1000px] mx-auto px-[24px] md:px-[36px] lg:px-[48px] pb-[24px] md:pb-[36px] lg:pb-[48px] flex items-end justify-between pointer-events-none">
        {/* Empty div for flex justification */}
        <div className="w-[120px] hidden md:block" />

        {/* AVAILABILITY BADGE */}
        <div className="flex items-center gap-[8px] pointer-events-auto">
          <div className="relative flex items-center justify-center w-[7px] h-[7px]">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8602C] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
            <span className="relative inline-flex rounded-full w-[7px] h-[7px] bg-[#E8602C]"></span>
          </div>
          <span className="font-sans font-semibold text-[12px] md:text-[13px] uppercase tracking-[0.06em] text-[#6B6B6B]">
            Available for work
          </span>
        </div>
      </div>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto min-h-screen flex flex-col justify-center px-[24px] md:px-[36px] lg:px-[48px]">

        <div
          className="max-w-[680px] pt-[32px] md:pt-[48px] pb-[56px] transition-opacity duration-[400ms] ease-out"
          style={{ opacity: isVisible ? 1 : 0 }}
        >

          {/* Heading Stack */}
          <h1 className="flex flex-col font-serif tracking-[-1px]">
            {/* Name — large, filled */}
            <span className="text-[#1A1A1A] leading-[1] text-[clamp(52px,10vw,88px)] md:text-[clamp(64px,9vw,96px)] mb-[20px]">
              Caroline Xu
            </span>

            {/* Role row — smaller, with hover interaction */}
            <div className="flex items-baseline gap-[10px] flex-wrap mt-[4px] leading-[1]">
              <span
                className="text-[clamp(28px,5vw,48px)] md:text-[clamp(32px,4vw,52px)]"
                style={{ WebkitTextStroke: "1.5px #1A1A1A", color: "transparent" }}
              >
                Hi, I'm a
              </span>
              <RoleWord />
            </div>
          </h1>

          {/* Subheading */}
          <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#4A4A4A] leading-[1.75] max-w-[480px] mt-[28px] md:mt-[32px]">
            I turn complex problems into intuitive and enjoyable digital experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[24px] md:gap-[32px] mt-[36px] md:mt-[44px]">
            <Link
              href="#work"
              className="font-sans font-medium text-[15px] md:text-[16px] tracking-[0.04em] text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] rounded-[2px] px-[32px] py-[13px] bg-transparent transition-colors duration-300 hover:border-[#E8602C] hover:text-[#E8602C] no-underline"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-[8px] font-sans font-medium text-[15px] md:text-[16px] text-[#4A4A4A] bg-transparent transition-colors duration-300 hover:text-[#1A1A1A] no-underline"
            >
              Contact me
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#E8602C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
