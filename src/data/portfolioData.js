// ============================================================
// portfolioData.js — Centralized configuration for Anurag Singh's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Anurag Singh",
  firstName: "Anurag",
  brandName: "Anurag Singh",
  title: "Python & Full Stack Developer",
  location: "Padrauna, U P",
  phone: "+91 8739039936",
  emails: {
    primary: "anuragsingh78626@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science graduate with hands-on experience in Python, Django, React.js, REST APIs, and full-stack web development. Skilled in building scalable web applications, API integrations, and backend services.",
  resumeUrl: "/Anurag%20Singh%20Software%20Developer.pdf",
};

export const socialLinks = {
  github: "https://github.com/Anurag268",
  linkedin: "https://www.linkedin.com/in/anurag-singh-470134204/"
};

export const heroContent = {
  greeting: "Hi, I'm Anurag Singh",
  titleHighlight: "Python & Full Stack Developer",
  subtitle:
    "I build fast, scalable applications using Python, Django, React.js, and REST APIs.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:anuragsingh78626@gmail.com?subject=Hiring%20Inquiry%20%E2%80%93%20Portfolio&body=Hello%20Anurag%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0ABest%20Regards%2C",
  },
  ctaResume: { text: "Download Resume", href: "/Anurag%20Singh%20Software%20Developer.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Anurag Singh</span>, a Computer Science graduate based in U P, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Python", "Django", "React.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and component-based development that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks like Django and React.js.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing (Manual & Functional), API integrations, and seamless deployment followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 }
      ]
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Django", level: 88 }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "API Integration", level: 88 },
        { name: "JSON & HTTP Protocols", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "Antigravity", level: 80 }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Debugging", level: 88 },
        { name: "Clean Code Practices", level: 85 },
        { name: "Frontend Optimization", level: 86 },
        { name: "Error Handling", level: 90 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Beyond Coding",
  heading: "Achievements",
  description: "AMCAT A Grade holder with top percentiles.",
  categories: [
    {
      title: "Computer Science",
      description: "99 National Percentile | A Grade",
      stats: "780 Score",
      icon: "💻"
    },
    {
      title: "Quantitative Ability",
      description: "98 National Percentile | A Grade",
      stats: "730 Score",
      icon: "📊"
    },
    {
      title: "English Comprehension",
      description: "92 National Percentile | A Grade",
      stats: "Top Percentile",
      icon: "📝"
    },
    {
      title: "Logical Ability",
      description: "89 National Percentile | A Grade",
      stats: "Top Percentile",
      icon: "🧠"
    }
  ]
};

export const leadershipList = [
  // Empty as no leadership roles mentioned, UI might skip rendering if empty
];

export const internshipsList = [
  {
    organization: "Labmentix Pvt. Ltd.",
    role: "Python Development Intern",
    duration: "Oct 2025 - Apr 2026",
    skills: ["Backend Automation", "Data Processing", "Debugging", "Code Efficiency"],
    tech: ["Python", "Backend Solutions"]
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and technologies." },
  { name: "Time Management", icon: "⏰", desc: "Balancing multiple tasks and responsibilities." }
];

export const projects = [
  {
    id: "shopper",
    number: "01",
    badge: "🚀 E-Commerce",
    title: "Shopper",
    description:
      "A responsive e-commerce application built with React.js featuring intuitive product browsing, filtering, and shopping cart workflows. Designed reusable UI components and optimized frontend interactions. Integrated API-driven workflows for dynamic rendering and real-time cart updates.",
    techTags: [
      "React.js",
      "UI/UX Principles",
      "API Integration",
      "Frontend Optimization"
    ],
    links: {
      github: "https://github.com/Anurag268/Shopper",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "speech-to-text",
    number: "02",
    badge: "Full-Stack",
    title: "Smart Speech-to-Text Converter",
    description:
      "A full-stack speech-to-text application using Flask, React.js, and REST APIs for real-time audio transcription. Built backend API endpoints for audio uploads, transcript processing, and history management. Integrated Deepgram API services using HTTP requests.",
    techTags: ["Flask", "React.js", "REST APIs", "Deepgram API", "JSON"],
    links: {
      github: "https://github.com/Anurag268/Speech-to-Text-Application",
    },
    isFlagship: false,
  },
  {
    id: "api-tester",
    number: "03",
    badge: "Tools",
    title: "API Tester Tool",
    description:
      "Built an API testing application inspired by Postman using React.js and REST API concepts. Implemented support for HTTP methods, request headers, and JSON response handling. Improved understanding of backend APIs, HTTP protocols, and API debugging workflows.",
    techTags: ["React.js", "REST API", "HTTP Protocols", "JSON"],
    links: {
      github: "https://github.com/Anurag268/API-Tester/",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Full Stack Development with Python & Manual Testing",
      issuer: "Besant Technologies (2025)",
      icon: "🐍",
      url: "/Anurag%20Singh%20-%20Fullstack%20Python.pdf",
    },
    {
      name: "Web Development with React.js",
      issuer: "Besant Technologies (2025)",
      icon: "⚛️",
    }
  ],
  viewAllUrl: "https://drive.google.com/drive/folders/1WDsnB2SDbdlb22yihg_05XFQY4_HpQL6?usp=sharing",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "KIPM College of Engineering and Technology",
  cgpa: "7.41/10",
  graduation: "August 2020 - July 2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python & Django",
    "React.js",
    "Full Stack Web Development",
  ],
  credential: "B.Tech CSE · CGPA 7.41",
  copyright: `© ${new Date().getFullYear()} Anurag Singh | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
