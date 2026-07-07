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

        const handleMouseMove = (e: MouseEvent) => {
            mx.current = e.clientX
            my.current = e.clientY
        }

        window.addEventListener("mousemove", handleMouseMove)

        let raf: number
        const tick = () => {
            if (glowRef.current) {
                gx.current += (mx.current - gx.current) * 0.12
                gy.current += (my.current - gy.current) * 0.12
                glowRef.current.style.left = gx.current + "px"
                glowRef.current.style.top = gy.current + "px"
            }
            raf = requestAnimationFrame(tick)
        }
        tick()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed z-50 rounded-full"
            style={{
                width: "130px",
                height: "130px",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(232,96,44,0.15) 0%, transparent 70%)",
            }}
        />
    )
}