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
  sections: {
    research?: {
      title: string
      content: string
      findings: string[]
      images?: string[]
    }
    personas?: {
      title: string
      content: string
      personas: {
        name: string
        role: string
        goals: string[]
        painPoints: string[]
        image: string
      }[]
    }
    process?: {
      title: string
      content: string
      steps: {
        title: string
        description: string
      }[]
      images?: string[]
    }
    screens?: {
      title: string
      content: string
      images: {
        src: string
        caption: string
      }[]
    }
    results?: {
      title: string
      content: string
      metrics: {
        value: string
        label: string
      }[]
    }
    learnings?: {
      title: string
      content: string
      points: string[]
    }
  }
}

export const projects: Project[] = [
  {
    id: "mobile-banking-app",
    title: "Accounting Firm Homepage Redesign",
    category: "Responsive Website",
    description: "A speculative redesign of an accounting firm's homepage to improve usability and accessibility.",
    thumbnail: "/mobile-banking-app.png",
    tags: ["Web Design", "Heuristic Evaluation", "Responsive Design"],
    year: "2025",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Responsive Website",
    description: "Creating a seamless shopping experience with intuitive navigation and streamlined checkout.",
    thumbnail: "/e-commerce-website-ui-design.jpg",
    tags: ["Web Design", "User Testing", "Design System"],
    year: "2024",
  },
  {
    id: "health-tracking-app",
    title: "Health & Wellness Tracker",
    category: "Mobile Application",
    description: "Designing a health tracking app that motivates users to build healthy habits through gamification.",
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
    title: "Mobile Banking App Redesign",
    category: "End-to-End Application",
    description: "Redesigning the mobile banking experience to improve usability and accessibility for all users.",
    thumbnail: "/mobile-banking-app.png",
    heroImage: "/mobile-banking-app-hero-mockup-on-phone.jpg",
    tags: ["UX Research", "UI Design", "Prototyping"],
    year: "2025",
    role: "Lead UX/UI Designer",
    duration: "4 months (Jan - Apr 2025)",
    tools: ["Figma", "Maze", "Miro", "Lottie"],
    team: ["1 × Product Manager", "1 × UX Designer", "2 × iOS Engineers", "2 × Android Engineers"],
    challenge:
      "The existing mobile banking app had a dated interface and complex navigation that frustrated users. Customer satisfaction scores were declining, and competitors were gaining market share with more modern, intuitive experiences. Users struggled to complete basic tasks like transfers and bill payments, leading to increased call center volume.",
    solution:
      "I led a complete redesign focused on simplifying the core banking experience. By conducting extensive user research and iterative testing, we created an intuitive interface that reduced task completion time by 40% and significantly improved accessibility compliance.",
    sections: {
      research: {
        title: "Research & Discovery",
        content:
          "We began with a comprehensive research phase to understand user pain points and behaviors. This included analyzing customer support tickets, conducting user interviews, and performing a competitive analysis of leading fintech apps.",
        findings: [
          "78% of users found the navigation confusing and hard to find key features",
          "Average task completion time for transfers was 3x longer than competitors",
          "Accessibility issues affected 15% of the user base, particularly older users",
          "Users wanted quick access to their most-used features without deep navigation",
        ],
        images: ["/user-research-affinity-mapping.jpg", "/competitive-analysis-chart.jpg"],
      },
      personas: {
        title: "User Personas",
        content:
          "Based on our research, we identified three primary user personas that represented our diverse user base.",
        personas: [
          {
            name: "Sarah Chen",
            role: "Busy Professional, 34",
            goals: ["Quick balance checks on the go", "Easy bill payments", "Seamless transfers between accounts"],
            painPoints: [
              "Too many steps to complete simple tasks",
              "Can't find features quickly",
              "Notifications are overwhelming",
            ],
            image: "/professional-woman-portrait.png",
          },
          {
            name: "Robert Martinez",
            role: "Retiree, 68",
            goals: ["Check account activity", "Pay bills safely", "Easy-to-read interface"],
            painPoints: ["Text is too small", "Confusing icons and labels", "Worried about security"],
            image: "/older-man-portrait-friendly.jpg",
          },
        ],
      },
      process: {
        title: "Design Process",
        content:
          "Our design process was iterative and user-centered. We moved through discovery, ideation, prototyping, and testing phases with continuous stakeholder collaboration.",
        steps: [
          {
            title: "Information Architecture",
            description:
              "Restructured the app's IA based on card sorting exercises with 24 participants, reducing navigation depth from 5 levels to 3.",
          },
          {
            title: "Low-Fidelity Wireframes",
            description:
              "Created paper prototypes and low-fidelity wireframes to rapidly test navigation concepts and screen layouts.",
          },
          {
            title: "High-Fidelity Prototypes",
            description:
              "Developed interactive Figma prototypes with the new design system, including micro-interactions and accessibility features.",
          },
          {
            title: "Usability Testing",
            description:
              "Conducted 3 rounds of usability testing with 8 participants each, iterating on designs based on feedback.",
          },
        ],
        images: ["/wireframe-sketches-on-paper.jpg", "/figma-design-system-components.jpg", "/usability-testing-session-remote.jpg"],
      },
      screens: {
        title: "Key Screens",
        content:
          "The final design features a clean, modern interface with improved accessibility and streamlined navigation.",
        images: [
          {
            src: "/mobile-banking-home-screen-dashboard.jpg",
            caption: "Home Dashboard - Quick access to balance, recent transactions, and quick actions",
          },
          {
            src: "/mobile-banking-transfer-money-screen.jpg",
            caption: "Transfer Flow - Simplified 3-step transfer process with smart suggestions",
          },
          {
            src: "/mobile-banking-bill-pay-screen.jpg",
            caption: "Bill Pay - One-tap payments with scheduled and recurring options",
          },
          {
            src: "/mobile-banking-account-settings.jpg",
            caption: "Settings - Accessibility options and personalization features",
          },
        ],
      },
      results: {
        title: "Results & Impact",
        content:
          "The redesigned app launched in April 2025 and has shown significant improvements across all key metrics.",
        metrics: [
          { value: "40%", label: "Reduction in task completion time" },
          { value: "4.6★", label: "App Store rating (up from 3.2)" },
          { value: "35%", label: "Decrease in support tickets" },
          { value: "92%", label: "WCAG AA compliance score" },
        ],
      },
      learnings: {
        title: "Key Learnings",
        content: "This project reinforced several important lessons about designing for diverse user needs.",
        points: [
          "Early and frequent user testing is essential - our assumptions were often wrong",
          "Accessibility features benefit all users, not just those with disabilities",
          "Simplifying navigation requires careful balance between discoverability and depth",
          "Stakeholder alignment on metrics early prevents scope creep and keeps focus on user value",
        ],
      },
    },
  },
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
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Design Systems",
  "Usability Testing",
  "Figma",
  "Adobe Creative Suite",
]

export const socialLinks = {
  linkedin: "https://linkedin.com/in/",
  dribbble: "https://dribbble.com/",
  behance: "https://behance.net/",
  email: "hello@carolinexu.com",
}
