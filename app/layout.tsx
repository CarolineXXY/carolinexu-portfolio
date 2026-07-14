import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"
import { CursorGlow } from "@/components/cursor-glow"

export const metadata: Metadata = {
  title: "Caroline Xu | UX/UI Designer",
  description:
    "I'm passionate about user-centred design, and ready to bring fresh, creative ideas to solve real-world problems.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "Portfolio", "Caroline Xu"],
  authors: [{ name: "Caroline Xu" }],
  openGraph: {
    title: "Caroline Xu | UX/UI Designer",
    description:
      "I'm passionate about user-centred design, and ready to bring fresh, creative ideas to solve real-world problems.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <CursorGlow />
          <Navbar />
          {children}
          <Footer />
        <BackToTop />
        <Analytics />
        <div id="google_translate_element" style={{ display: 'none' }} />
        <script 
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
        <script dangerouslySetInnerHTML={{ __html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'zh-CN',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}} />
      </body>
    </html>
  )
}
