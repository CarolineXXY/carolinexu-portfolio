"use client"

import { useEffect, useState, useRef } from "react"
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
  const [active, setActive] = useState(false)
  const [displayed, setDisplayed] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches
    setIsTouchDevice(isTouch)
    if (isTouch) {
      setActive(true)
      intervalRef.current = setInterval(() => {
        setOpacity(0)
        setTimeout(() => {
          setDisplayed(prev => (prev + 1) % roles.length)
          setOpacity(1)
        }, 200)
      }, 1200)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const startCycle = () => {
    if (isTouchDevice) return
    setActive(true)
    intervalRef.current = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setDisplayed(prev => (prev + 1) % roles.length)
        setOpacity(1)
      }, 200)
    }, 900)
  }

  const stopCycle = () => {
    if (isTouchDevice) return
    setActive(false)
    setOpacity(1)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  return (
    <span
      className="font-serif italic cursor-default"
      style={{
        fontSize: "clamp(22px, 4.5vw, 54px)",
        color: active ? roles[displayed].color : "#C8BFB5",
        opacity: opacity,
        transition: "color 0.3s, opacity 0.2s",
        borderBottom: active ? "none" : "1.5px solid #C8BFB5",
        paddingBottom: active ? "0" : "2px",
        letterSpacing: "-0.5px",
      }}
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
    >
      {active ? roles[displayed].label : "designer?"}
    </span>
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6]"
    >
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(280px, 45vw, 600px)",
            height: "clamp(280px, 45vw, 600px)",
            background: "radial-gradient(circle, #E8602C22 0%, #E8602C08 45%, transparent 70%)",
            top: "-120px", right: "-80px",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(140px, 25vw, 320px)",
            height: "clamp(140px, 25vw, 320px)",
            background: "radial-gradient(circle, #C0763A14 0%, transparent 70%)",
            bottom: "20px", left: "-60px",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(200px, 35vw, 480px)",
            height: "clamp(200px, 35vw, 480px)",
            border: "0.5px solid #F0EBE3",
            top: "-160px", right: "-30px",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(100px, 18vw, 280px)",
            height: "clamp(100px, 18vw, 280px)",
            border: "0.8px solid #E8E3DC",
            top: "-50px", right: "120px",
          }}
        />
        <div
          className="absolute rounded-full hidden md:block"
          style={{
            width: "80px", height: "80px",
            border: "0.8px solid #E8E3DC",
            bottom: "60px", right: "60px",
          }}
        />
      </div>

      {/* AVAILABILITY BADGE */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 z-10 flex items-center gap-2">
        <div className="relative flex items-center justify-center w-[7px] h-[7px]">
          <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8602C] opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
          <span className="relative inline-flex rounded-full w-[7px] h-[7px] bg-[#E8602C]" />
        </div>
        <span className="font-sans font-semibold text-[11px] uppercase tracking-[0.06em] text-[#6B6B6B]">
          Available for work
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto min-h-screen flex flex-col items-center justify-center px-6 md:px-9 lg:px-12 text-center">
        <div
          className="w-full max-w-[860px] transition-opacity duration-[400ms] ease-out"
          style={{ opacity: isVisible ? 1 : 0 }}
        >

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <span className="w-5 h-px bg-[#E8602C] block" />
            <span className="font-sans font-medium text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-[#9A9080]">
              Research · Design · Build
            </span>
            <span className="w-5 h-px bg-[#E8602C] block" />
          </div>

          {/* Name */}
          <h1
            className="font-serif text-[#1A1A1A] leading-[1] tracking-[-1px] mb-5 notranslate"
            style={{ fontSize: "clamp(56px, 10vw, 100px)" }}
            translate="no"
          >
            Caroline Xu
          </h1>

          {/* Role row */}
          <div className="flex items-baseline justify-center gap-[10px] flex-wrap mt-[6px] mb-8 leading-[1]">
            {/* Solid on mobile, outlined on desktop */}
            <span
              className="font-serif leading-[1] md:hidden"
              style={{
                fontSize: "clamp(22px, 4.5vw, 54px)",
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
              }}
            >
              Hi, I'm a
            </span>
            <span
              className="font-serif leading-[1] hidden md:inline"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                color: "transparent",
                WebkitTextStroke: "1.2px #1A1A1A",
                letterSpacing: "-0.5px",
              }}
            >
              Hi, I'm a
            </span>
            <RoleWord />
          </div>

          {/* Subheading */}
          <p className="font-sans font-light text-[17px] md:text-[19px] text-[#6B6B6B] leading-[1.8] max-w-[520px] mx-auto mt-5 md:mt-6">
            I turn complex problems into intuitive and enjoyable digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
            <Link
              href="#work"
              className="font-sans font-medium text-[15px] md:text-[16px] tracking-[0.04em] text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] rounded-[2px] px-8 py-[11px] bg-transparent transition-colors duration-300 hover:border-[#E8602C] hover:text-[#E8602C] no-underline w-full sm:w-auto text-center"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-2 font-sans font-medium text-[15px] md:text-[16px] text-[#6B6B6B] transition-colors duration-300 hover:text-[#1A1A1A] no-underline"
            >
              Contact me
              <ArrowUpRight className="w-4 h-4 text-[#E8602C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}