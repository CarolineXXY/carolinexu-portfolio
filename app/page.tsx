import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
