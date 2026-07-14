"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

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
        <div className="hidden md:flex items-center gap-[32px]">
          <ul className="flex items-center gap-[32px]">
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

          <div className="w-[1px] h-[14px] bg-[#E8E3DC]"></div>

          <div
            className="flex items-center gap-[4px] cursor-pointer"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px' }}
            onClick={toggleLanguage}
          >
            <span style={{
              color: language === 'zh' ? '#e8602c' : '#9A9080',
              fontWeight: language === 'zh' ? 500 : 400,
              transition: 'opacity 200ms ease, color 200ms ease'
            }}>中</span>
            <span style={{ color: '#E8E3DC' }}>/</span>
            <span style={{
              color: language === 'en' ? '#e8602c' : '#9A9080',
              fontWeight: language === 'en' ? 500 : 400,
              transition: 'opacity 200ms ease, color 200ms ease'
            }}>EN</span>
          </div>
        </div>

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
        className={`md:hidden absolute top-full left-0 right-0 bg-background transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 border-b border-border" : "max-h-0"
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
          <li>
            <div className="w-[30px] h-[1px] bg-[#E8E3DC] my-1 mx-auto"></div>
          </li>
          <li>
            <div
              className="flex items-center gap-[4px] cursor-pointer"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px' }}
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
            >
              <span style={{
                color: language === 'zh' ? '#1A1A1A' : '#9A9080',
                fontWeight: language === 'zh' ? 500 : 400,
                transition: 'opacity 200ms ease, color 200ms ease'
              }}>中</span>
              <span style={{ color: '#E8E3DC' }}>/</span>
              <span style={{
                color: language === 'en' ? '#1A1A1A' : '#9A9080',
                fontWeight: language === 'en' ? 500 : 400,
                transition: 'opacity 200ms ease, color 200ms ease'
              }}>EN</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
