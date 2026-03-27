import type { CaseStudyBlock } from "@/components/case-study/block"

export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  tags: string[]
  year: string
}

export interface CaseStudy extends Project {
  role: string
  duration: string
  tools: string[]
  team: string[]
  challenge: string
  solution: string
  heroImage: string
  disclaimer?: string
  blocks: CaseStudyBlock[]
}

export const projects: Project[] = [
  {
    id: "mobile-banking-app",
    title: "Accounting Firm Homepage Redesign",
    category: "Responsive Website",
    description: "A speculative redesign of an accounting firm's homepage to improve usability and accessibility.",
    thumbnail: "/accounting-firm-banner.png",
    tags: ["Web Design", "Heuristic Evaluation", "Responsive Design"],
    year: "2025",
  },
  {
    id: "uqu-app",
    title: "UQU App",
    category: "Mobile Application",
    description: "A platform that centralises student services and events to boost engagement at university.",
    thumbnail: "/uqu-banner.png",
    tags: ["Mobile Design", "User Research", "Prototyping"],
    year: "2024",
  },
  {
    id: "health-tracking-app",
    title: "Health & Wellness Tracker",
    category: "Mobile Application",
    description: "A speculative redesign of an accounting firm's homepage to improve usability and accessibility.",
    thumbnail: "/health-tracking-app-ui-design.jpg",
    tags: ["Mobile Design", "UX Strategy", "Visual Design"],
    year: "2024",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Building a data visualization dashboard that makes complex analytics accessible and actionable.",
    thumbnail: "/analytics-dashboard-ui.png",
    tags: ["Dashboard Design", "Data Viz", "B2B"],
    year: "2024",
  },
]

export const caseStudies: Record<string, CaseStudy> = {
  "mobile-banking-app": {
    id: "mobile-banking-app",
    title: "Accounting Firm Homepage Redesign",
    category: "Responsive Website",
    description: "Redesigning the mobile banking experience to improve usability and accessibility for all users.",
    thumbnail: "/accounting-firm-banner.png",
    heroImage: "/accounting-firm-banner.png",
    tags: ["Web Design", "Heuristic Evaluation", "Responsive Design"],
    year: "2025",
    role: "UX/UI Designer",
    duration: "1 month (Oct 2025)",
    tools: ["Figma", "Pen and Paper"],
    team: ["1 × Product Manager", "1 × UX Designer", "2 × iOS Engineers", "2 × Android Engineers"],
    challenge:
      "The existing accounting firm website had an outdated design that failed to meet modern user expectations, with poor navigation, lack of clear calls-to-action, and disorganised content, and zero responsiveness, which greatly hinders user engagement and trust in the firm's professional services.",
    solution:
      "I led a complete redesign focused on establishing a trustworthy digital presence. By conducting heuristic evaluations and iterative wireframing, I created an intuitive, accessible interface that clearly communicates the firm's value and streamlines client contact.",
    disclaimer: "Disclaimer: This is a speculative redesign created for portfolio purposes to demonstrate UX/UI skills. It is not affiliated with or endorsed by any existing company.",
    blocks: [
      {
        title: "Research & Discovery",
        content: "As this was a self-initiated trial project without formal user testing, I conducted a heuristic evaluation based on Nielsen's 10 Usability Heuristics and supplemented it with an informal competitor analysis of modern accounting firm websites to benchmark against industry standards.",
        images: ["/original.png"],
        items: [
          "Visual & Aesthetic: Outdated UI and oversized logo disrupt the Aesthetic-Usability Effect and reduce brand trust.",
          "Navigation: Poor navigation structure and lack of clear CTAs and contact forms lead to increased bounce rates.",
          "Content: Disorganised content and lack of clear hierarchy make it difficult for users to find the information they need.",
          "Responsiveness: Non-responsive design and lack of footer/styling on subpages break web standards."
        ],
      },
      {
        title: "Proposed Solution",
        content: "The goal was to redesign the homepage to create a modern, trustworthy, and mobile-friendly user experience that clearly communicates the firm's value proposition, improves navigation, and streamlines user journeys for potential clients to get in touch.",
        items: [
          { title: "Hero Section with Tagline and CTA", description: "A concise introduction and prominent 'Contact Us' button." },
          { title: "Structured Content Sections", description: "Organised content into clear, scannable sections with ample spacing and visual hierarchy." },
          { title: "Modern Visual Identity", description: "A cohesive design with a professional color palette and legible typography." },
          { title: "Improved Navigation", description: "Balanced header with a visible navbar and smaller logo, and a footer with quick links and contact information." },
          { title: "Responsive Design", description: "Ensured all content is fully responsive and accessible on mobile devices." }
        ]
      },
      {
        title: "Wireframes",
        content: "I started with low-fidelity sketches to create the basic layout and content hierarchy to test structural layout functionality.",
        images: [
          "/accounting-lofi-laptop.jpg",
          "/accounting-lofi-phone.jpg",
        ]
      },
      {
        title: "Design System",
        content: "To ensure consistency across the site, I created a lightweight design system including responsive typography scaling, a semantic color palette, and reusable UI components like buttons and form inputs. The colour palette is based on the firm's branding to convey trust and professionalism. I chose Helvetica Neue as the primary typeface for its clean, modern aesthetic and excellent readability.",
        images: ["/accounting-branding.png"]
      },
      {
        title: "High Fidelity Prototype",
        content: "I incorporated feedback from self-review to enhance readability and usability. I focused heavily on whitespace, typography, and contrast to ensure a clean, modern aesthetic that feels inherently trustworthy and professional.",
        link: {
          text: "View Figma Prototype",
          url: "https://www.figma.com/proto/G6LGZEdOcwEtH1WUx1IRhB/Accounting?page-id=116%3A111&node-id=116-264&p=f&viewport=285%2C90%2C0.15&t=ew9RQo1Rg5m6EHn5-1&scaling=min-zoom&content-scaling=fixed"
        },
        images: [
          { src: "/accountin-Key-Screens.png", caption: "Redesigned Homepage - laptop &mobile screens" },
        ]
      },
      {
        title: "User Testing",
        content: "I conducted a small unmoderated usability testing with 5 participants to validate the new navigation and content structure. Each participant was given a scenario: visiting the site as a potential new client seeking accounting services for the first time, and asked to complete a series of tasks independently, without guidance.",
        subSections: [
          {
            subtitle: "TASKS GIVEN",
            listType: "number",
            items: [
              "Locate the primary contact or booking button",
              "Find information about the firm's services",
              "Assess whether the site feels trustworthy and professional"
            ]
          },
          {
            subtitle: "METRICS TRACKED",
            listType: "bullet",
            items: [
              "Time on task",
              "Task success rate",
              "Ease of use (self-reported, 1–5 scale)",
              "User satisfaction (post-test rating)",
              "Perceived trust and professionalism (1–5 scale)"
            ]
          }
        ]
      },
      {
        title: "Outcome",
        content: "Across all five sessions, participants navigated the redesigned site with confidence. The results validated my design decisions around hierarchy, trust signalling, and CTA visibility.",
        items: [
          {
            value: "100%",
            label: "Task success rate",
            subNote: "All 5 users located the CTA within 5 seconds"
          },
          {
            value: "4.8/5",
            label: "Trust & professionalism",
            subNote: "Average rating across all participants"
          },
          {
            value: "4.9/5",
            label: "Ease of use",
            subNote: "Self-reported after task completion"
          },
          {
            value: "< 5s",
            label: "Time to find CTA",
            subNote: "Fastest critical task across all sessions",
            highlight: true
          }
        ]
      },
      {
        title: "Key Learnings",
        content: "This trial redesign enhanced my ability to apply heuristic evaluations to identify usability issues. By applying design principles like visual hierarchy, white space, and consistency, I transformed an outdated homepage into a more engaging and professional interface.",
        items: [
          {
            title: "Trust is built through design consistency",
            description: "Not just content, visual coherence signals professionalism before a user reads a single word."
          },
          {
            title: "Small changes create big impact",
            description: "Adding clear CTAs and taglines significantly improved the experience and conversion potential for a service-based business."
          },
          {
            title: "Heuristic evaluation is a powerful tool",
            description: "It gave me a structured, repeatable way to identify usability issues with confidence rather than guesswork."
          }
        ]
      }
    ]
  },
  "uqu-app": {
    id: "uqu-app",
    title: "UQU App",
    category: "Mobile Application",
    description: "A platform that centralises student services and events to boost engagement at university.",
    thumbnail: "/uqu-banner.png",
    heroImage: "/uqu-banner.png",
    tags: ["Mobile Design", "User Research", "Prototyping"],
    year: "2024",
    role: "UX Researcher, UX/UI Designer",
    duration: "April 2025",
    tools: ["Figma", "Miro", "Pen and Paper", "Excel"],
    team: ["1 × Product Manager", "2 × UX Designers", "3 × Developers"],
    challenge:
      "The UQ Union is a student organisation dedicated to providing a range of services to students at The University of Queensland. However, due to fragmented information across multiple portals, many students were unaware of the services and events available to them. This led to low student engagement and high frustration when trying to access university resources.",
    solution:
      "We designed a unified mobile application platform that centralises all student services, club activities, and campus events into one single, intuitive interface. The goal was to boost university engagement, ensure better utilisation of resources, and foster a vibrant campus community by making discovery and participation easier.",
    blocks: [
      {
        title: "Research & Discovery",
        content: "As UQ students ourselves, we started with our own experience. The frustration we all shared was the same: UQU's events and services are scattered across Instagram, Facebook, and a handful of third-party links, which makes them hard to find and access.\n\nTo back this up with broader data, we ran a survey with over 60 students.",
        cardsTitle: "KEY INSIGHTS",
        cards: [
          { title: "Awareness vs. Action", content: "Most students are aware of UQU events, but engagement rates remain relatively low." },
          { title: "Service Blindspots", content: "Only a small portion of students are aware of and engage with Student Advocacy & Support." },
          { title: "Discoverability Need", content: "There is a need for improved discoverability and accessibility to boost participation in events, services, and activities." }
        ],
        outro: "That surfaced our core design challenge. With so many features to potentially include, we had to make sure the valuable features are easy to find without overwhelming them with options. Finding that balance between accessibility and focus became the throughline for every decision we made.",
        images: ["/awareness-and-engagement-chart.jpg"]
      },
      {
        title: "Feature Roadmap",
        content: "From the survey results, we pulled out the recurring pain points and grouped them into themes, such as things like information being hard to find, processes feeling unnecessarily complex, and support services being hidden where students wouldn't think to look. From there, we mapped each pain point against its priority and values, which gave us a clear basis for deciding what features to build first.",
        images: ["/mapping.png"]
      },
      {
        title: "User Persona",
        persona: {
          avatarInitials: "AK",
          name: "Alex Kim",
          tagLine: "The Overwhelmed Engager",
          bio: [
            { label: "Age", value: "20" },
            { label: "Occupation", value: "Engineering Student" },
            { label: "Location", value: "On-campus Housing" },
            { label: "Schedule", value: "20+ hrs classes weekly" }
          ],
          quote: "I know UQU does a lot, but I never know where to look — by the time I find out about something, it's already over.",
          sections: [
            {
              title: "GOALS",
              items: [
                "Discover and join campus events to build social connections",
                "Access student services and welfare support in one place",
                "Stay informed about affordable food options and UQU perks",
                "Find and attend events that friends are already going to"
              ]
            },
            {
              title: "PAIN POINTS",
              items: [
                "Services are scattered across multiple platforms",
                "Unaware of many UQU offerings beyond basic events",
                "Busy schedule leaves no time to hunt for information",
                "Lack of reminders means events are discovered too late"
              ]
            },
            {
              title: "NEEDS",
              items: [
                "A single centralised app for events, services, and clubs",
                "Personalised notifications and smart recommendations",
                "Simple interface for quick access without a learning curve",
                "Seamless RSVP, club joining, and welfare support access"
              ]
            },
            {
              title: "BEHAVIOURS",
              items: [
                "Discovers most events through word of mouth or friends",
                "Checks phone frequently but ignores non-personalised alerts",
                "Prefers mobile-first experiences over desktop or email"
              ]
            }
          ]
        }
      },
      {
        title: "Proposed Solution",
        content: "Our goal was to design a mobile app that brings everything together in one place: events, services, clubs, welfare support, and campus resources.",
        cards: [
          { title: "Discoverability", content: "Making every campus event and service easy to find from a single centralised interface." },
          { title: "Accessibility", content: "Ensuring all platform features and vital welfare support systems are easy to access for every student." },
          { title: "Engagement", content: "Creating a unified digital campus environment that actively encourages student participation." }
        ],
        itemsTitle: "KEY FEATURES",
        items: [
          { title: "Modular Home Screen", description: "Easy access to key services like events, student advocacy services, volunteering, deals, news and resources" },
          { title: "Event Calendar", description: "Searchable calendar with filters, RSVPs, and reminders to boost participation" },
          { title: "MatesRates Barcode", description: "Always-visible tappable card for instant scan to buy discounted products on campus" },
          { title: "SAS Quick Access", description: "Quick links to welfare, support, and other resources with in-app navigation" },
          { title: "Notifications and Alerts", description: "Push notifications for upcoming events, deadlines, and promotions" }
        ]
      },
      {
        title: "Wireframes",
        content: "Before committing to high fidelity visuals, we mapped out the core user journeys and created low-fidelity wireframes to rapidly test the structural layout and navigation logic.",
        images: [
          "/placeholder.svg",
          "/placeholder.svg"
        ]
      },
      {
        title: "Design System",
        content: "We established a vibrant, accessible design system that aligns perfectly with the university's official branding while still feeling modern, lightweight, and engaging for a Gen Z demographic.",
        images: ["/uqu-designsystem.png"]
      },
      {
        title: "High Fidelity Prototype",
        content: "The final high-fidelity screens brought the wireframes to life. We prioritized large touch targets, high legibility, and a clear visual hierarchy to ensure the app felt inherently simple to use.",
        link: { text: "View Figma Prototype", url: "#" },
        images: [
          { src: "/placeholder.svg", caption: "UQU App - Dashboard and Event Screens" }
        ]
      },
      {
        title: "User Testing",
        content: "We conducted an unmoderated usability testing session with 5 students to validate the new navigation and event discovery flow. Each participant was given a scenario: visiting the app as a new student seeking weekend activities, and asked to complete a series of tasks independently.",
        subSections: [
          {
            subtitle: "TASKS GIVEN",
            listType: "number",
            items: [
              "Locate a social event happening this weekend",
              "RSVP and add the event to your calendar",
              "Find the booking page for academic advising"
            ]
          },
          {
            subtitle: "METRICS TRACKED",
            listType: "bullet",
            items: [
              "Time on task",
              "Task success rate",
              "Ease of use (self-reported, 1–5 scale)",
              "User satisfaction (post-test rating)"
            ]
          }
        ]
      },
      {
        title: "Outcome",
        content: "The centralized platform approach was highly successful. The results validated our design decisions around personalized discovery feeds and simplified RSVP mechanics.",
        items: [
          { value: "100%", label: "Task success rate", subNote: "All users successfully RSVP'd to an event" },
          { value: "4.7/5", label: "Ease of use", subNote: "Average rating for event discovery" },
          { value: "AA", label: "Accessibility", subNote: "Exceeded WCAG baseline requirements" },
          { value: "< 10s", label: "Time to book", subNote: "Fastest critical task across all sessions", highlight: true }
        ]
      },
      {
        title: "Key Learnings",
        content: "Designing the UQU App taught us how to balance incredibly dense structural information architectures in a mobile environment without cognitively overwhelming the user.",
        items: [
          {
            title: "Personalization is critical",
            description: "Students only engage with campus content that is hyper-relevant to their specific faculty, interests, and year level."
          },
          {
            title: "Simplicity drives engagement",
            description: "Reducing the friction to RSVP to an event by just one click directly increased the likelihood of a student attending."
          },
          {
            title: "Testing reveals blind spots",
            description: "Early wireframe testing helped us correct a confusing navigation pattern for the services directory before we invested time in high fidelity designs."
          }
        ]
      }
    ]
  }
}

export function getAdjacentProjects(currentId: string) {
  const index = projects.findIndex((p) => p.id === currentId)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export const skills = [
  "User Research",
  "User Interface Design",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Design Systems",
  "Usability Testing",
  "Web Development",
  "Responsive Design",
]

export const designTools = [
  { name: "Figma", logo: "/figma-icon.svg" },
  { name: "Adobe XD", logo: "/adobe-2.svg" },
  { name: "Miro", logo: "/miro-2.svg" },
  { name: "Notion", logo: "/notion-logo.png" },
  { name: "Canva", logo: "/canva-wordmark-2.svg" },
  { name: "Framer", logo: "/framer-1.svg" },
  { name: "HTML", logo: "/html-1.svg" },
  { name: "CSS", logo: "/css-3.svg" },
  { name: "JavaScript", logo: "/javascript-r.svg" },
  { name: "Unity", logo: "/unity-technologies-logo.svg" },
]

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/caroline-xu-334a8b28b/",
  email: "carolinexu0116@gmail.com",
}
