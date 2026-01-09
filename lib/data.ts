export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  tags: string[]
  year: string
}

export const projects: Project[] = [
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App Redesign",
    category: "End-to-End Application",
    description: "Redesigning the mobile banking experience to improve usability and accessibility for all users.",
    thumbnail: "/mobile-banking-app.png",
    tags: ["UX Research", "UI Design", "Prototyping"],
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
