export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  role?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "enterprise-crm",
    title: "Enterprise CRM Platform",
    shortDescription:
      "A multi-tenant CRM system with role-based access control, real-time dashboards, and automated workflows.",
    description:
      "Built a comprehensive CRM platform designed for multi-tenant enterprise use. Features include advanced role-based access control with customizable permissions, real-time analytics dashboards, automated invoice generation with PDF export, and a queue management system for appointment scheduling.",
    thumbnail: "/images/projects/crm-thumbnail.jpg",
    images: ["/images/projects/crm-1.jpg", "/images/projects/crm-2.jpg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Asadullah246",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Tailwind CSS",
    ],
    features: [
      "Multi-tenant architecture with data isolation",
      "Role-based access control with granular permissions",
      "Real-time analytics dashboard",
      "Automated invoice generation and PDF export",
      "Queue management with appointment scheduling",
      "Background job processing with BullMQ",
    ],
    challenges: [
      "Designed tenant isolation strategy ensuring data security across organizations",
      "Optimized complex Prisma queries for real-time dashboard aggregation",
      "Implemented idempotent background job processing for reliable invoice generation",
    ],
    role: "Lead Full-Stack Developer",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "Full-featured online store with payment integration, inventory management, and order tracking.",
    description:
      "Developed a complete e-commerce solution with multiple payment gateway integrations (Stripe, PayPal, SSLCommerz), real-time inventory tracking, and comprehensive order management. Built with a focus on performance and scalability.",
    thumbnail: "/images/projects/ecommerce-thumbnail.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Asadullah246",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    features: [
      "Multi-gateway payment processing (Stripe, PayPal, SSLCommerz)",
      "Real-time inventory management",
      "Order tracking and notification system",
      "Admin dashboard with sales analytics",
      "Product search with filters and sorting",
    ],
    challenges: [
      "Integrated multiple payment gateways with unified checkout flow",
      "Built real-time stock synchronization across concurrent sessions",
    ],
    role: "Full-Stack Developer",
    featured: true,
  },
  {
    slug: "realtime-chat-app",
    title: "Real-Time Chat Application",
    shortDescription:
      "A real-time messaging platform with WebSocket communication, typing indicators, and online presence.",
    description:
      "Built a real-time chat application featuring instant messaging, typing indicators, online/offline status tracking, and message read receipts using WebSocket technology.",
    thumbnail: "/images/projects/chat-thumbnail.jpg",
    images: ["/images/projects/chat-1.jpg"],
    githubUrl: "https://github.com/Asadullah246",
    technologies: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
    features: [
      "Real-time messaging with WebSockets",
      "Typing indicators and read receipts",
      "Online/offline presence tracking",
      "Message history with pagination",
      "User authentication and profiles",
    ],
    role: "Full-Stack Developer",
    featured: false,
  },
];
