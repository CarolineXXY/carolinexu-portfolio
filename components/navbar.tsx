"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Padding matches the hero container: 24px mobile, 36px tablet, 48px desktop */}
      <nav className="mx-auto w-full max-w-[1000px] px-[24px] md:px-[36px] lg:px-[48px] pt-[24px] md:pt-[36px] lg:pt-[48px] flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-3xl md:text-4xl text-foreground transition-colors hover:text-accent no-underline"
        >
          CX.
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-medium text-foreground-muted no-underline transition-colors duration-300 hover:text-accent focus:text-accent active:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger (3 lines, 1.5px, #1a1a1a) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-[5px] z-50 relative"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-lg text-foreground-muted no-underline transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
