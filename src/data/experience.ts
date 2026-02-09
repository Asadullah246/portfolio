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
    company: "Your Company Name",
    role: "Full-Stack Developer",
    period: "2024 — Present",
    description:
      "Leading development of enterprise-grade web applications with modern technologies.",
    achievements: [
      "Architected and developed scalable multi-tenant SaaS platform",
      "Implemented robust authentication and role-based access control system",
      "Designed real-time notification system using Socket.IO and Redis",
      "Built automated reporting pipeline with BullMQ background jobs",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
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
    institution: "Your University",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    period: "2020 — 2024",
    description:
      "Focused on software engineering, algorithms, and web technologies.",
  },
];
