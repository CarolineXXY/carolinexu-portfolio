"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, ExternalLink } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { FadeIn } from "./fade-in"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - fade in */}
          <FadeIn className="text-center mb-12 md:mb-16">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-wcag mb-3">Get in Touch</p>
            <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear from you. Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - fade in from left */}
            <FadeIn className="lg:col-span-3" direction="left" delay={100}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none text-foreground"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-accent-wcag text-white font-medium rounded-lg hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSubmitted && (
                  <p className="text-green-700 font-medium">Thanks for your message! I&apos;ll be in touch soon.</p>
                )}
              </form>
            </FadeIn>

            {/* Contact Info - fade in from right */}
            <FadeIn className="lg:col-span-2" direction="right" delay={200}>
              <div className="bg-muted rounded-xl p-6 md:p-8">
                <h3 className="font-mono text-lg font-semibold text-primary-dark mb-6">Contact Info</h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-3 text-foreground-muted hover:text-accent-wcag transition-colors group"
                  >
                    <span className="p-2 bg-card rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Mail size={20} className="text-accent-wcag" />
                    </span>
                    <span className="text-sm md:text-base">{socialLinks.email}</span>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground-muted hover:text-accent-wcag transition-colors group"
                  >
                    <span className="p-2 bg-card rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Linkedin size={20} className="text-accent-wcag" />
                    </span>
                    <span className="text-sm md:text-base">LinkedIn</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={socialLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground-muted hover:text-accent-wcag transition-colors group"
                  >
                    <span className="p-2 bg-card rounded-lg group-hover:bg-accent/10 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent-wcag">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base">Dribbble</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={socialLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground-muted hover:text-accent-wcag transition-colors group"
                  >
                    <span className="p-2 bg-card rounded-lg group-hover:bg-accent/10 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent-wcag">
                        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base">Behance</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
