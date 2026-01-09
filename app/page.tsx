import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
