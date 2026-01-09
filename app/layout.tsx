import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

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
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#30415D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
