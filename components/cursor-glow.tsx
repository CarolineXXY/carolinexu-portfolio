"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null)
    const gx = useRef(0)
    const gy = useRef(0)
    const mx = useRef(0)
    const my = useRef(0)
    const isSelecting = useRef(false)

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return

        const glow = glowRef.current
        if (!glow) return

        const handleMouseMove = (e: MouseEvent) => {
            mx.current = e.clientX
            my.current = e.clientY

            // hide while text is selected
            if (window.getSelection()?.toString()) {
                isSelecting.current = true
                glow.style.opacity = "0"
            } else if (!isSelecting.current) {
                glow.style.opacity = "1"
            }
        }

        const handleMouseDown = () => {
            isSelecting.current = true
            glow.style.opacity = "0"
        }

        const handleMouseUp = () => {
            isSelecting.current = false
            glow.style.opacity = "1"
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)

        let raf: number

        const tick = () => {
            if (glowRef.current) {
                // Increase this value for tighter cursor tracking
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
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed z-50 rounded-full transition-opacity duration-200"
            style={{
                width: "130px",
                height: "130px",
                transform: "translate(-50%, -50%)",
                background:
                    "radial-gradient(circle, rgba(232,96,44,0.15) 0%, transparent 70%)",
                opacity: 0,
            }}
        />
    )
}