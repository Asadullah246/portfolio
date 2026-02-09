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
      { name: "Shadcn UI" },
      { name: "Zustand" },
    ],
  },
  {
    title: "Backend",
    description: "Designing robust APIs and server-side systems",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Prisma" },
      { name: "BullMQ" },
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
    title: "Tools & DevOps",
    description: "Workflow automation and deployment",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "SSLCommerz" },
      { name: "Linux" },
    ],
  },
];
