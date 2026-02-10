export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
    ],
  },
  {
    title: "Backend",
    description: "Designing robust APIs and server-side systems",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Nest.js" },
      { name: "Prisma" },
      { name: "REST API" },
      { name: "Redis" },
      { name: "Socket.IO" },
    ],
  },
  {
    title: "Database",
    description: "Data modeling, optimization, and management",
    skills: [{ name: "PostgreSQL" }, { name: "MongoDB" }],
  },
  {
    title: "Tools & Integrations",
    description: "Workflow automation, deployment, and third-party services",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Jest" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "SSLCommerz" },
    ],
  },
];
