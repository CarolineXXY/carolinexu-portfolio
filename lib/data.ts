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
    thumbnail: "/accounting-firm-thumbnail.png",
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
    thumbnail: "/accounting-firm-thumbnail.png",
    heroImage: "/accounting-firm-thumbnail.png",
    tags: ["Web Design", "Heuristic Evaluation", "Responsive Design"],
    year: "2025",
    role: "UX/UI Designer",
    duration: "1 month (Oct 2025)",
    tools: ["Figma", "Pen and Paper"],
    team: ["1 × Product Manager", "1 × UX Designer", "2 × iOS Engineers", "2 × Android Engineers"],
    challenge:
      "The existing accounting firm website had an outdated design that failed to meet modern user expectations, with poor navigation, lack of clear calls-to-action, and disorganised content, and zero responsiveness, which greatly hinders user engagement and trust in the firm's professional services.",
    solution:
      "I led a complete redesign focused on simplifying the core banking experience. By conducting extensive user research and iterative testing, we created an intuitive interface that reduced task completion time by 40% and significantly improved accessibility compliance.",
    sections: {
      research: {
        title: "Research & Discovery",
        content:
          "As this was a self-initiated trial project without formal user testing, I conducted a heuristic evaluation based on Nielsen's 10 Usability Heuristics and supplemented it with an informal competitor analysis of modern accounting firm websites to benchmark against industry standards.",
        images: ["/original.png"],
        findings: [
          "Visual & Aesthetic: Outdated UI and oversized logo disrupt the Aesthetic-Usability Effect and reduce brand trust.",
          "Navigation: Poor navigation structure and lack of clear CTAs and contact forms lead to increased bounce rates.",
          "Content: Disorganised content and lack of clear hierarchy make it difficult for users to find the information they need.",
          "Responsiveness: Non-responsive design and lack of footer/styling on subpages break web standards.",
        ],
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

export const designTools = [
  { name: "Figma", logo: "https://via.placeholder.com/64/F24E1E/FFFFFF?text=Figma" },
  { name: "Adobe XD", logo: "https://via.placeholder.com/64/FF61F6/FFFFFF?text=XD" },
  { name: "Sketch", logo: "https://via.placeholder.com/64/F7B500/FFFFFF?text=Sketch" },
  { name: "Photoshop", logo: "https://via.placeholder.com/64/31A8FF/FFFFFF?text=Ps" },
  { name: "Illustrator", logo: "https://via.placeholder.com/64/FF9A00/FFFFFF?text=Ai" },
  { name: "Miro", logo: "https://via.placeholder.com/64/FFD02F/000000?text=Miro" },
  { name: "InVision", logo: "https://via.placeholder.com/64/FF3366/FFFFFF?text=InVision" },
  { name: "Protopie", logo: "https://via.placeholder.com/64/6C5CE7/FFFFFF?text=Protopie" },
  { name: "Maze", logo: "https://via.placeholder.com/64/09F/FFFFFF?text=Maze" },
  { name: "Notion", logo: "https://via.placeholder.com/64/000000/FFFFFF?text=Notion" },
]

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/caroline-xu-334a8b28b/",
  dribbble: "https://dribbble.com/",
  behance: "https://behance.net/",
  email: "carolinexu0116@gmail.com",
}
