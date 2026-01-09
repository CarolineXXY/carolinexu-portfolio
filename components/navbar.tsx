"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className={cn(
              "font-mono text-lg md:text-xl font-bold transition-colors",
              isScrolled ? "text-primary-dark hover:text-accent-wcag" : "text-white hover:text-accent",
            )}
          >
            Caroline Xu
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:underline underline-offset-4",
                    isScrolled ? "text-foreground-muted hover:text-accent-wcag" : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="px-5 py-2.5 bg-accent-wcag text-white text-sm font-medium rounded-lg hover:bg-accent hover:text-accent transition-colors"
              >
                Get in Touch
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-primary-dark hover:text-accent-wcag" : "text-white hover:text-accent",
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="py-4 space-y-4 bg-card rounded-lg mb-4 shadow-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-foreground-muted hover:text-accent-wcag hover:bg-muted hover:underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-2.5 bg-accent-wcag text-white text-base font-medium rounded-lg hover:bg-accent hover:text-accent transition-colors"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
