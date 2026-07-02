import type { CaseStudyBlock } from "@/components/case-study/block"

export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  tags: string[]
  year: string
  status?: "completed" | "in-progress" | "coming-soon"
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
  introduction?: string
  roleDescription?: string
  statusBanner?: string[]
  blocks: CaseStudyBlock[]
}


export const projects: Project[] = [
  {
    id: "accounting-firm-redesign",
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
    id: "shroomcycle",
    title: "Sleep Accountability Lamp",
    category: "Product Design",
    description: "An innovative smart lamp designed to promote healthy sleep habits through gentle light cues and accountability features.",
    thumbnail: "/shroomcycle-banner.png",
    tags: ["Product Design", "IoT", "Health & Wellness"],
    year: "2024",
  },
  {
    id: "crumb",
    title: "Crumb — AI-Facilitated UX Design",
    category: "AI-assisted workflow",
    description: "A mobile app helping complete beginners learn to bake through structured skill progression and AI-powered feedback",
    thumbnail: "/crumb-thumbnail.png",
    tags: ["Mobile Design", "AI-Assisted Design", "Lifestyle"],
    year: "2026",
    status: "in-progress",
  },
]

export const caseStudies: Record<string, CaseStudy> = {
  "accounting-firm-redesign": {
    id: "accounting-firm-redesign",
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
    team: ["1 × UX/UI Designer"],
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
    team: ["2 × UI Designer", "2 × UX Researcher", "1 × Developer"],
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
          { title: "Modular Home Screen", description: "Easy access to key services like events, student advocacy services, volunteering, deals, news and resources." },
          { title: "Event Calendar", description: "Searchable calendar with filters, RSVPs, and reminders to boost participation." },
          { title: "MatesRates Barcode", description: "Always-visible tappable card for instant scan to buy discounted products on campus." },
          { title: "SAS Quick Access", description: "Quick links to welfare, support, and other resources with in-app navigation." },
          { title: "Notifications and Alerts", description: "Push notifications for upcoming events, deadlines, and promotions." }
        ]
      },
      {
        title: "Design System",
        content: "The colour palette was drawn directly from the UQ Union's existing branding. The colours feel vibrant and engaging for uni students demographic. For typography, we used a combination of Futura and Roboto fonts to create a modern, clean and accessible look.",
        images: ["/uqu-designsystem.png"]
      },
      {
        title: "High Fidelity Prototype",
        content: "For the final high-fidelity prototype, we prioritised key UQU services, high legibility, and a clear visual hierarchy to ensure the app felt simple to use.",
        link: { text: "View Figma Prototype", url: "https://www.figma.com/proto/qY57GRfthfIfOCtbAgVONu/UQU?page-id=122%3A413&node-id=122-1366&viewport=296%2C265%2C0.13&t=HIfHi4c3RF1IbMn8-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=122%3A1366" },
        images: ["/uqu-hifi.png", "/uqu-keyscreen1.png", "/uqu-keyscreen2.png"]
      },
      {
        title: "User Testing",
        content: "We conducted a moderated usability testing session with think-aloud method with 5 students to validate the design. Each participant was asked to complete a series of tasks independently.",
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
        content: "Overall, participants were satisfied with the design. They appreciated the centralised access and easy navigation, noting it would increase their engagement.",
        items: [
          { value: "100%", label: "Task success rate", subNote: "All users successfully RSVP'd to an event" },
          { value: "4.6/5", label: "Ease of use", subNote: "Average rating for event discovery" },
          { value: "< 10s", label: "Time to book", subNote: "Fastest critical task across all sessions", highlight: true }
        ],
        outro: "While the overall feedback was positive, some participants felt a bit overwhelmed by the variations in colour use (to reflect UQU’s diverse branding), so for iteration, we would use neutral colours like black and white as the primary colours and use the accent colours sparingly."
      },
      {
        title: "Key Learnings",
        content: "Designing the UQU App taught me how to balance incredibly dense structural information in a mobile environment without cognitively overwhelming the user. Through research and testing, I learned the importance of making all features easy to find while giving priority to the ones users value most.",
      }
    ]
  },
  "shroomcycle": {
    id: "shroomcycle",
    title: "Sleep Accountability Lamp",
    category: "Product Design",
    description: "An innovative smart lamp designed to promote healthy sleep habits through gentle light cues and accountability features.",
    thumbnail: "/shroomcycle-banner.png",
    heroImage: "/shroomcycle-banner.png",
    tags: ["Product Design", "IoT", "Health & Wellness"],
    year: "2024",
    role: "Product Designer, UX Researcher, Prototype Developer",
    duration: "4 months",
    tools: ["Arduino", "Miro", "Pen and Paper", "SolidWorks"],
    team: ["1 × Product Designer", "1 × Developer", "2 × Interaction Designer"],
    challenge:
      "University students often struggle with poor sleep hygiene due to irregular schedules, academic pressure, and excessive screen time. On average, students get 6.2 hours of sleep compared to the recommended 8-9 hours, leading to reduced focus and well-being. There's a need for a collaborative, accessible solution to encourage better sleep routines.",
    solution:
      "We designed Shroomcycle, a smart, interactive lamp that uses gentle ambient lights and a physical accountability mechanism to help users build and maintain healthier sleep routines without relying on harsh screen-based interactions.",
    blocks: [
      {
        title: "Research & Discovery",
        content: "To deeply understand university students' sleep habits, we used three research methods: interviews, autoethnographies, and diary studies.",
        subSections: [
          {
            subtitle: "INTERVIEWS",
            content: "From our interviews, we were able to identify a few key pieces of information:",
            listType: "bullet",
            items: [
              "Interviewees categorise 6-9 hours of sleep as “Good Sleep”. Most were unable to meet this due to academic and job pressures.",
              "Most participants habitually use their phones prior to sleeping.",
              "Interviewees frequently get disturbed by noises from housemates/neighbours that often wake them up."
            ]
          },
          {
            subtitle: "AUTOETHNOGRAPHY",
            content: "From conducting autoethnographies, we were able to understand that one common routine that we all had prior to sleeping was to browse our phones, be it social media or YouTube."
          },
          {
            subtitle: "DIARY STUDY",
            content: "Users would often watch videos on YouTube or browse social media prior to sleeping to help them wind down.",
            listType: "bullet",
            items: [
              "Users would often stay awake and not have good sleep around assignment deadlines and exam times.",
              "Users would often check their phones as soon as they wake up."
            ],
            image: { src: "/shroomcycle-diarystudy.png", caption: "Diary Study Questions", size: "medium" }
          },
          {
            image: { src: "/shroomcycle-user-research.png" }
          }
        ],
        cardsTitle: "KEY INSIGHTS",
        cards: [
          { title: "Sleep Shortfall", content: "Students average 6.2 hours of sleep due to academic and environmental pressures." },
          { title: "Screen Time Impact", content: "Phone use before bed disrupts sleep quality." },
          { title: "Need for Consistency", content: "Consistent schedules and reduced device use could improve sleep hygiene." }
        ]
      },
      {
        title: "Persona",
        persona: {
          avatarInitials: "ET",
          name: "Emma Tan",
          tagLine: "21-year-old university student struggling with sleep hygiene",
          bio: [
            { label: "Age", value: "21" },
            { label: "Occupation", value: "Full-time student" },
            { label: "Location", value: "Brisbane, Australia" }
          ],
          quote: "I know I should sleep better, but it's hard to stick to a routine with my schedule.",
          sections: [
            { title: "Goals", items: ["Improve sleep quality for better focus and well-being", "Maintain academic performance", "Build consistent bedtime routines"] },
            { title: "Frustrations", items: ["Inconsistent sleep schedule", "Difficulty winding down", "Waking up tired", "Lack of accountability for timely bedtimes"] },
            { title: "Needs", items: ["A tool encourage consistent sleep schedules", "A way to track sleep progress", "Simple, affordable solution to stay accountable to my goals"] }
          ]
        }
      },
      {
        title: "Storyboard",
        images: [{ src: "/shroomcycle-storyboard.jpg", size: "large" }]
      },
      {
        title: "Proposed Solution",
        content: "We designed ShroomCycle, a smart, interactive lamp that uses gentle ambient lights and a accountability mechanism to help university students build and maintain healthier sleep routines.",
        images: [{ src: "/shroomcycle-initial-design-draft.png", caption: "ShroomCycle Design Draft", size: "medium" }],
        itemsTitle: "KEY FEATURES",
        items: [
          { title: "Ambient Light Detection", description: "Lamps activate when room lights dim." },
          { title: "Phone Detection Pad", description: "A pad that detects when a phone is placed on it and turns off the user's light, indicating they're ready to sleep." },
          { title: "Group Accountability", description: "Each lamp's LEDs reflect the sleep status of friends, creating a sense of shared motivation." },
          { title: "Simple and Affordable", description: "An accessible solution that integrates seamlessly into the bedroom environment." }
        ]
      },
      {
        title: "Hardware Prototyping",
        content: "We started with breadboard prototypes using Arduino to test the ambient light detection and pressure sensor logic. Later, we moved to building the lamp using cardboard, planks, and paper.",
        subSections: [
          {
            subtitle: "INITIAL PROTOTYPE",
            content: "For our initial prototype, we used an Arduino and a breadboard to wire up the ambient light and pressure sensors. This allowed us to quickly test the core logic of detecting room lighting and sensing phone placement before committing to a physical housing.",
            images: ["/shroomcycle-Initial_Prototype.png",
              "/shroomcycle-Initial_prototype2.png"]
          },
          {
            subtitle: "BUILDING THE MUSHROOM",
            content: "We used cardboard, wood planks, and paper to create a mushroom-shaped lamp that diffused the LED light while safely housing all the internal wiring.",
            image: { src: "/Make_Shroom.png", size: "small" }
          }
        ]
      },
      {
        title: "Final Product & Promotion",
        content: "The final ShroomCycle product seamlessly integrates into the user's bedroom environment, using soft, diffused light to remind users of their accountability to sleep. \n\nCheck out our promotional video to see Shroomcycle in action and understand how it works to encourage healthier sleep habits.",
        link: { text: "View GitHub Project", url: "https://github.com/LiCHihTseng/ShroomCycle" },
        videoUrl: "https://drive.google.com/file/d/1IocXM9hf5OOcszXdiTAdlhlAWu1WDyQI/preview"
      }
    ]
  },
  "crumb": {
    id: "crumb",
    title: "Crumb — AI-Facilitated UX Design",
    category: "AI-assisted workflow",
    description: "A mobile app helping complete beginners learn to bake through structured skill progression and AI-powered feedback",
    thumbnail: "/crumb-thumbnail.png",
    heroImage: "/crumb-banner.png",
    tags: ["Mobile App", "UX/UI Design", "AI-assisted Workflow"],
    year: "2026",
    role: "UX & Product Designer",
    duration: "In Progress",
    tools: ["Claude", "Google Stitch", "Figma"],
    team: [],
    challenge: "Home bakers have nowhere good to go when a bake fails. The real problem isn't a lack of information — it's a vocabulary gap. Bakers fail twice: once in the oven, and again when trying to explain what went wrong.",
    solution: "Crumb is a mobile baking troubleshooting app that guides users through a structured diagnostic flow, one question at a time, with an AI companion for follow-up and a photo feature to show the AI exactly what went wrong.",
    status: "in-progress",
    introduction: "This case study documents how I used Claude and Google Stitch to move from a rough concept to a hi-fi prototype, and where human design judgement still mattered at every step.",
    blocks: [
      {
        title: "The Workflow at a Glance",
        table: {
          headers: ["Step", "Tool", "Output"],
          rows: [
            ["Problem framing", "Claude", "Structured brief, user segments, design opportunity"],
            ["Design direction", "Claude", "3 distinct directions, 1 chosen"],
            ["Visual system", "Claude", "Colour scheme, typography, component rules"],
            ["Prompt engineering", "Claude", "Structured Stitch prompt"],
            ["Prototype generation", "Stitch", "4 iterative hi-fi prototype passes"],
            ["Audit and refinement", "Claude + me", "Screen-by-screen analysis each round"]
          ]
        }
      },
      {
        title: "Step 1 — Problem Framing",
        label: "Tool: Claude (Product Agent Skill)",
        content: "Instead of jumping straight to UI, I ran a structured problem framing session first. I described the app concept and asked Claude to identify the target user, the real constraints, and the design opportunity of this product.",
        quote: "This isn't a troubleshooting problem. It's a vocabulary and observation gap. Most troubleshooting resources assume the baker already knows how to diagnose — they skip straight to solutions.",
        cardsTitle: "Two User Segments Identified",
        cards: [
          {
            title: "Frustrated Beginners",
            content: "Deflated, need reassurance and plain language. Don't have the vocabulary to describe the problem. They fail twice — once in the oven, and again when trying to explain what went wrong."
          },
          {
            title: "Intermediate Bakers",
            content: "Want the science behind the fix, not just the fix. They'll find hand-holding patronising — they need depth, not reassurance."
          }
        ],
        callout: {
          eyebrow: "Design Opportunity",
          text: "How might we guide bakers to become better observers of their own bakes, so that troubleshooting is itself a skill-building lesson?"
        },
        images: [{ src: "/problem-framing.png", caption: "Problem framing output" }]
      },
      {
        title: "Step 2 — Design Direction",
        label: "Tool: Claude (Design Agent Skill)",
        content: "With the brief confirmed, I asked Claude to propose three structurally distinct directions — not just visual styles, but different fundamental models for how the diagnostic flow would work.",
        cardsTitle: "Three Distinct Directions",
        cards: [
          {
            prefix: "A",
            title: "Visual Symptom Spotter",
            content: "Users identify their problem by tapping a photo rather than finding words. No typing required.",
            note: "Trade-off: Strong for beginners, breaks down for flavour problems and compound failures."
          },
          {
            prefix: "B",
            title: "Guided Investigator",
            content: "One question at a time, each with embedded micro-copy explaining why it matters. The structure of the questions is where the skill-building happens.",
            note: "Trade-off: Slower to reach a diagnosis, but each step teaches the user something."
          },
          {
            prefix: "C",
            title: "AI Conversation with Structure",
            content: "Free-form chat with a hidden diagnostic checklist running underneath. Most natural to use.",
            note: "Trade-off: Highest risk of an AI hallucinating a confident but wrong diagnosis."
          }
        ],
        callout: {
          eyebrow: "My Decision",
          text: "Direction B as the backbone, extended with the AI companion from C as a \"go deeper\" layer, and the photo feature from A as an optional accelerator at the start."
        },
        images: [{ src: "/design-direction.png", caption: "Design direction summary" }]
      },
      {
        title: "Step 3 — Visual System",
        label: "Tool: Claude",
        content: "I chose an editorial aesthetic for a premium food publication feel, and asked Claude to define exact tokens and rules, including specific hex values, typeface pairings, and usage constraints.",
        subSections: [
          {
            title: "Colour Palette",
            content: "Six tokens covering every surface, text, and accent role. Terracotta replaces an earlier gold (#C9A96E) that failed WCAG AA contrast — see revision note below."
          }
        ],
        table: {
          headers: ["Token", "Hex", "Use"],
          rows: [
            ["Parchment", "#F5F2ED", "App background"],
            ["Ink", "#1C1A17", "Primary text"],
            ["Stone", "#6B6460", "Secondary text, labels"],
            ["Terracotta", "#9E6B58", "Accent fills only — never as text"],
            ["Linen", "#E8E4DC", "Dividers, card borders"],
            ["Deep Terracotta", "#8B3A2A", "Errors, warnings"]
          ]
        },
        quote: "Claude's first palette used gold #C9A96E which failed WCAG AA contrast on white (ratio ~2.8:1, minimum 4.5:1) and read as dirty yellow on screen. I flagged this and Claude replaced it with terracotta — warmer, more editorial, and WCAG compliant as a fill.",
        outro: "Typography: Playfair Display Regular (400) for all headlines. DM Sans Regular/Medium for all functional text. DM Sans Italic specifically for micro-copy.",
        images: [{ src: "/placeholder.svg", caption: "Colour palette and typography specimen" }]
      },
      {
        title: "Step 4 — Prompt Engineering",
        label: "Tool: Claude → Google Stitch",
        content: "Claude's most practical contribution was translating design decisions into precise, structured Stitch prompts. Each prompt included exact hex codes, pixel values, font weights, component specs, copy examples, and edge states across all 8 screens.",
        callout: {
          eyebrow: "Why this matters",
          text: "Vague prompts produce vague output. Specifying the design details directly determined what Stitch generated."
        },
        images: [{ src: "/prompt-excerpt.png", caption: "Prompt structure excerpt" }]
      },
      {
        title: "Step 5 — Stitch Prototype Iterations",
        label: "Tool: Google Stitch",
        content: "4 full generation passes. Each round followed the same cycle: generate → I review screens → ask Claude to audit → Claude produces annotated analysis → I refine the prompt → regenerate.",
        subSections: [
          {
            title: "Round 1",
            content: "Stitch interpreted the editorial tone well. The parchment background, typography hierarchy, and card layout all landed. But structural issues appeared immediately.",
            subtitle: "Key issues caught",
            listType: "bullet",
            items: [
              "Gold accent failed WCAG AA contrast (ratio 2.8:1 on white)",
              "Nav bar active state inconsistent across every screen",
              "Bake names in History truncated mid-word",
              "Stitch added unsolicited content sections not in the spec"
            ],
            image: { src: "/version1.png", caption: "Version 1 — all screens" }
          },
          {
            title: "Round 2",
            content: "Updated colour system, lighter card borders, AI chat bubble switched to white, primary CTA button corrected.",
            subtitle: "Still missing",
            listType: "bullet",
            items: [
              "No left/right content margins",
              "Button text inconsistency on several screens",
              "Home screen still had an unnecessary card wrapper"
            ],
            image: { src: "/version2.png", caption: "Version 2 — all screens" }
          },
          {
            title: "Round 3",
            content: "Margins applied, card removed from Home, button text mostly sentence case, colour system consistent.",
            subtitle: "Still missing",
            listType: "bullet",
            items: [
              "Nav labels alternating between ALL CAPS and title case across screens",
              "Wordmark had an icon artefact embedded in it on the AI Chat screen",
              "Pastry tile used a sparkle icon (inaccurate for pastry)"
            ],
            image: { src: "/version3.png", caption: "Version 3 — all screens" }
          },
          {
            title: "Round 4 — Final Stitch Output",
            content: "5 of 8 screens mostly met the direction. Three screens still had issues for Figma to resolve.",
            subtitle: "Remaining issues handed to Figma",
            listType: "bullet",
            items: [
              "Baking History wordmark split across two lines",
              "Category Selection: wrong categories, wrong grid order, wrong icon",
              "AI Chat missing the top bar entirely",
              "Small inconsistency on several screens"
            ],
            image: { src: "/version4.png", caption: "Version 4 — final screens, annotated" }
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
