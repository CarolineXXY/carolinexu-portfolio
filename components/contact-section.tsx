"use client"

import { Mail, Linkedin, ExternalLink } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { FadeIn } from "./fade-in"

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-background border-t border-border">
      <div className="max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 md:mb-20">
          <p className="text-label mb-4">Get in Touch</p>
          <h2 className="font-serif mb-6">Let&apos;s work together</h2>
          <p className="text-foreground-muted leading-[1.75] max-w-xl text-base md:text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="pt-10 border-t border-border max-w-xl">
            <h3 className="text-label mb-8 text-foreground">Contact</h3>

            <div className="space-y-6">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-4 text-foreground-muted transition-colors duration-300 hover:text-warm-orange no-underline hover:underline underline-offset-[0.2em] decoration-warm-orange"
              >
                <Mail size={20} strokeWidth={1.5} className="text-foreground shrink-0" aria-hidden />
                <span className="text-base">{socialLinks.email}</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground-muted transition-colors duration-300 hover:text-warm-orange no-underline hover:underline underline-offset-[0.2em] decoration-warm-orange"
              >
                <Linkedin size={20} strokeWidth={1.5} className="text-foreground shrink-0" aria-hidden />
                <span className="text-base">LinkedIn</span>
                <ExternalLink size={14} strokeWidth={1.5} className="opacity-60" aria-hidden />
              </a>

              <a
                href={socialLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground-muted transition-colors duration-300 hover:text-warm-orange no-underline hover:underline underline-offset-[0.2em] decoration-warm-orange"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-foreground shrink-0" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
                <span className="text-base">Dribbble</span>
                <ExternalLink size={14} strokeWidth={1.5} className="opacity-60" aria-hidden />
              </a>

              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground-muted transition-colors duration-300 hover:text-warm-orange no-underline hover:underline underline-offset-[0.2em] decoration-warm-orange"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-foreground shrink-0" aria-hidden>
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                <span className="text-base">Behance</span>
                <ExternalLink size={14} strokeWidth={1.5} className="opacity-60" aria-hidden />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
