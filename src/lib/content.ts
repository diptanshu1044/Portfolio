export const site = {
  name: "Diptanshu Banerjee",
  role: "Full Stack Developer",
  tagline:
    "I design and ship scalable systems — backends, cloud, AI, and the interfaces that make them usable.",
  email: "diptanshubanerjee123@gmail.com",
  github: "https://github.com/diptanshu1044",
  linkedin: "https://linkedin.com/in/diptanshu1044",
  resume: "/Resume.pdf",
  url: "https://diptanshu.vercel.app",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  eyebrow: "Philosophy",
  headline: "Own the full lifecycle — not just the UI.",
  body: [
    "I build products that need to hold up under real load: clean architecture, thoughtful APIs, production infrastructure, and interfaces that stay out of the way. Complex engineering problems are where I do my best work — system design, third-party integrations, real-time paths, and AI features that earn their place.",
    "What sets my work apart is end-to-end ownership. From schema and auth to CI/CD, DNS, and monitoring, I stay with the stack until it ships and stays healthy. That same mindset drives freelancing, open work, and interview prep: build things that scale, then explain how and why.",
  ],
};

export const projects = [
  {
    id: "momgov",
    title: "MomGovAssistance",
    status: "Flagship",
    summary:
      "A multi-portal government assistance platform for U.S. mothers — AI-powered eligibility, case management, referrals, documents, and analytics — serving 400+ government assistance programs in production.",
    narrative:
      "Mother and Partner portals share a high-performance rule engine and AI eligibility scanner (Claude) that filters hundreds of programs before inference, reducing end-to-end scan time from 30+ seconds to under 2 seconds. Built the Partner Portal from scratch, modernized the existing Mother Portal, and implemented production features including organization management, RBAC, referrals, case tracking, document workflows, and analytics. Production deployments on AWS with PostgreSQL, Prisma, CI/CD, SSL, and DNS ensure reliable operation for real U.S. organizations and mothers.",
    outcomes: [
      "Built the Partner Portal from scratch & modernized the Mother Portal",
      "Optimized AI eligibility scans from 30+ sec → <2 sec",
      "Production infrastructure: AWS, PostgreSQL, CI/CD, SSL, DNS",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Claude",
      "AWS",
    ],
    link: null,
  },
  {
    id: "socially",
    title: "Socially",
    status: "Live",
    summary:
      "A social platform with profiles, posts, follows, and real-time messaging — built for speed and presence.",
    narrative:
      "Socially brings together feed interactions and Socket.IO messaging with a Next.js frontend and PostgreSQL/Prisma data layer. Messaging aims for sub-200ms latency, with deployment spanning Vercel and GCP so the product stays snappy as conversations grow.",
    outcomes: [
      "Live at socially.org.in",
      "Realtime messaging under 200ms latency target",
      "Full social graph: posts, likes, comments, follows",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Socket.IO", "Vercel", "GCP"],
    link: "https://socially.org.in",
  },
  {
    id: "chat-video",
    title: "Chat with Video Calling",
    status: "2025",
    summary:
      "Group and private chat with WebRTC video — signaling, rooms, and a REST surface built from scratch.",
    narrative:
      "A realtime communication stack combining Socket.IO signaling with WebRTC media, plus 8+ REST endpoints for rooms and auth. Node, React, and MongoDB power private and group conversations with video sessions that feel immediate.",
    outcomes: [
      "WebRTC + Socket.IO signaling pipeline",
      "8+ REST endpoints for chat and rooms",
      "Private and group sessions in one product",
    ],
    stack: ["Node.js", "React", "MongoDB", "WebRTC", "Socket.IO"],
    link: null,
  },
] as const;

export const experience = [
  {
    role: "Full-stack Developer Intern",
    org: "Classy Endeavors",
    period: "Apr 2025 – Oct 2025",
    location: "Remote",
    story:
      "Shipped production features across Next.js, React, and Express — including Gemini AI and Gmail API workflows that cut manual effort by roughly 40%. Worked with GCP, AWS S3, and Lambda while delivering 3+ features that landed in production.",
  },
  {
    role: "Backend Developer",
    org: "Pet-So-Much",
    period: "2025",
    location: "Remote",
    story:
      "Built the backend from scratch: 10+ API resource types, Stripe payments with webhooks, pagination that reduced payloads by about 70%, and granular RBAC for admin flows across products, orders, and prescriptions.",
  },
  {
    role: "Frontend Developer Intern",
    org: "Indian Hempstore",
    period: "Oct – Nov 2024",
    location: "Dehradun",
    story:
      "Revamped 5+ core components and contributed to a Next.js admin dashboard — tightening UX and maintainability for day-to-day operations.",
  },
  {
    role: "Freelance & Upwork",
    org: "Independent",
    period: "Ongoing",
    location: "Remote",
    story:
      "Full ownership from idea to deploy: fullstack apps, APIs, AI integrations, cloud, auth, payments, database design, and performance work for clients who need production-ready delivery.",
  },
] as const;

export const leadership = {
  title: "Technical Head — UPES CSI",
  period: "Jun 2025 – Present",
  story:
    "Lead technical initiatives for the chapter: mentor 10+ members, review projects, run workshops, and help shape events including YUGMAK — turning ideas into shipped student work.",
  achievements: [
    {
      title: "Hackathon 4.0 Finalist",
      detail:
        "Top 5 of 180+ teams (Feb 2025). Built a Smart Digital Coaching Platform in 24 hours — React, TypeScript, Node, MongoDB, Socket.IO, JWT, with realtime chat and video.",
    },
  ],
};

export const capabilities = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Python", "Rust"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "REST",
      "WebSockets",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Vercel",
      "PM2",
      "GitHub Actions",
      "Linux",
      "Nginx",
      "SSL",
      "CI/CD",
    ],
  },
  {
    group: "Integrations",
    items: [
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Stripe",
      "Razorpay",
      "Gmail API",
      "Gemini / Claude / OpenAI",
      "RBAC",
    ],
  },
] as const;

export const currently = {
  eyebrow: "Right now",
  headline: "Building, freelancing, and sharpening for the next role.",
  items: [
    "Preparing for software engineering interviews — system design, backend depth, and competitive programming.",
    "Freelancing fullstack, AI, and cloud projects with production ownership.",
    "Practicing DSA on LeetCode and Striver A–Z alongside online assessments — fundamentals that keep architecture honest.",
  ],
};
