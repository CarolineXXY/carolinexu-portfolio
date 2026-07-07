"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null)
    const gx = useRef(0)
    const gy = useRef(0)
    const mx = useRef(0)
    const my = useRef(0)

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return

        const glow = glowRef.current
        if (!glow) return

        const hideGlow = () => {
            glow.style.opacity = "0"
        }

        const showGlow = () => {
            glow.style.opacity = "1"
        }

        const handleMouseMove = (e: MouseEvent) => {
            mx.current = e.clientX
            my.current = e.clientY
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement

            const cursor = window.getComputedStyle(target).cursor

            if (cursor === "pointer") {
                hideGlow()
            } else {
                showGlow()
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseover", handleMouseOver)

        let raf: number

        const tick = () => {
            if (glowRef.current) {
                gx.current += (mx.current - gx.current) * 0.35
                gy.current += (my.current - gy.current) * 0.35

                glowRef.current.style.left = `${gx.current}px`
                glowRef.current.style.top = `${gy.current}px`
            }

            raf = requestAnimationFrame(tick)
        }

        tick()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseover", handleMouseOver)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed z-50 rounded-full transition-opacity duration-200"
            style={{
                width: "120px",
                height: "120px",
                transform: "translate(-50%, -50%)",
                background:
                    "radial-gradient(circle, rgba(232,96,44,0.15) 0%, transparent 70%)",
                opacity: 1,
            }}
        />
    )
}