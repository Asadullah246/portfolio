export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Pxlhut",
    role: "Backend Developer",
    period: "2025 — 2026",
    description:
      "Developed and maintained backend systems for enterprise-grade SaaS applications using NodeJs, ExpressJs, NestJS and PostgreSQL.",
    achievements: [
      "Architected scalable multi-tenant SaaS platform with tenant-level data isolation",
      "Integrated multiple payment gateways (Stripe, PayPal, SSLCommerz) with unified checkout flow",
      "Implemented role-based and hybrid access control with granular, module-level permissions",
      "Designed real-time notification system using Socket.IO and Redis",
      "Built background job processing pipelines with BullMQ",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
    ],
  },
  {
    id: "exp-2",
    company: "Shaderbytes, India",
    role: "Junior Full Stack Developer",
    period: "2022 — 2023",
    description:
      "Built and maintained full-stack web applications using React and Node.js with real-time features.",
    achievements: [
      "Developed responsive user interfaces with React.js and modern frontend tooling",
      "Built RESTful APIs and server-side logic using Node.js and Express.js",
      "Implemented real-time features including live chat and notifications using Socket.IO",
      "Collaborated with cross-functional teams to deliver production-ready applications",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
  },
  {
    id: "exp-3",
    company: "Unisight Technologies",
    role: "React Developer (Intern)",
    period: "2022 — 2023",
    description:
      "Contributed to a React-based SaaS application, implementing new features and resolving production bugs.",
    achievements: [
      "Developed and shipped new features for a production SaaS application using React.js",
      "Identified and resolved critical bugs to improve application stability",
      "Collaborated with senior developers to follow best practices and code review processes",
      "Gained hands-on experience with component-driven architecture and state management",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "REST API"],
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Susong Durgapur Govt. College",
    degree: "Bachelor of Science",
    field: "Physics, Mathematics, Biology",
    period: "2017 — 2020",
    description:
      "Studied a Bachelor of Science degree with a focus on Physics, Mathematics, and Biology.",
  },
];
