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

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
