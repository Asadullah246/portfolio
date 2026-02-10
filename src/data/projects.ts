export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  liveUrls?: { label: string; url: string }[];
  githubUrls?: { label: string; url: string }[];
  technologies: string[];
  features: string[];
  challenges?: string[];
  role?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "donation-platform",
    title: "Donation Platform",
    shortDescription:
      "A full-stack charity and fundraising platform with multi-gateway payments, real-time donation feeds, CMS-driven UI, and a comprehensive admin dashboard.",
    description:
      "Built a production-grade charity and fundraising platform from the ground up — backend API, admin panel, and public-facing website — as three independently deployable applications. The platform enables donors to browse charitable appeals, make secure payments through Stripe, PayPal, and SSLCommerz, create personal fundraising campaigns, attend events, and track their donation history. The admin panel provides content management, analytics dashboards, invoice generation, and full site configuration. Real-time features powered by Socket.IO deliver live donation feeds and instant payment status updates.",
    thumbnail: "/images/Donation1.png",
    images: ["/images/Donation1.png", "/images/Donation2.png"],
    liveUrls: [
      {
        label: "Frontend",
        url: "https://donation.asadullah.dev",
      },
      {
        label: "Admin Panel",
        url: "https://donation-admin.asadullah.dev",
      },
    ],
    githubUrls: [
      {
        label: "Backend",
        url: "https://github.com/Asadullah246/donation-server",
      },
      {
        label: "Admin Panel",
        url: "https://github.com/Asadullah246/donation-admin",
      },
      {
        label: "Frontend",
        url: "https://github.com/Asadullah246/donation-frontend",
      },
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Express 5",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Stripe",
      "PayPal",
      "Tailwind CSS",
      "Zustand",
      "TanStack Router",
      "TanStack Query",
      "Zod",
      "Cloudinary",
      "Docker",
    ],
    features: [
      "Multi-gateway payment processing (Stripe, PayPal, SSLCommerz) with webhook verification",
      "Real-time donation feed and payment status tracking via Socket.IO",
      "CMS-driven dynamic UI — homepage, hero slider, header, footer all configurable from admin",
      "Admin dashboard with donation analytics, charts, and date-range filtering",
      "Multi-step checkout flow with gift aid and recurring donation support",
      "Role-based access control with 6 admin roles and granular permissions",
      "Blog, news, and event management with rich text editor (Editor.js)",
      "PDF invoice generation for donation receipts",
      "Zakat calculator with configurable thresholds",
      "Community fundraising campaigns with progress tracking and social sharing",
      "Media gallery with drag-and-drop upload and Cloudinary integration",
      "Email system with 10 EJS templates, retry mechanism, and failed-email fallback",
    ],
    challenges: [
      "Integrated three independent payment gateways (Stripe, PayPal, SSLCommerz) into a unified checkout flow with idempotent webhook handlers",
      "Designed a real-time architecture with Socket.IO namespaces — public live donation feed and authenticated admin notifications",
      "Built a fully CMS-driven frontend where all homepage sections are dynamically rendered from backend configuration, with graceful fallback when the API is unavailable",
      "Implemented automatic token refresh with request queuing in the admin panel to prevent race conditions during concurrent API calls",
    ],
    role: "Full-Stack Developer",
    featured: true,
  },
  {
    slug: "invetrixa-server",
    title: "Invetrixa — Inventory Management System",
    shortDescription:
      "A multi-tenant SaaS inventory management backend with POS, invoicing, stock tracking, RBAC, and CI/CD pipelines.",
    description:
      "Designed and built a production-grade, multi-tenant SaaS backend for inventory management. The system provides isolated tenant workspaces with modules for product catalog management, stock tracking with movement history, a full point-of-sale system with cart and terminal support, automated invoice generation, and customer/supplier management. Features include session-based authentication with OTP verification, role-based access control with module-level granularity, subscription-based feature gating, and a comprehensive CI/CD pipeline with GitHub Actions.",
    thumbnail: "/images/invetrixa1.png",
    images: ["/images/invetrixa1.png", "/images/invetrixa2.png"],
    liveUrls: [
      {
        label: "API Server",
        url: "https://invetrixa-server.asadullah.dev",
      },
    ],
    githubUrls: [
      {
        label: "Backend",
        url: "https://github.com/Asadullah246/invetrixa-server",
      },
    ],
    technologies: [
      "NestJS 11",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Passport.js",
      "Swagger",
      "Zod",
      "Jest",
      "GitHub Actions",
    ],
    features: [
      "Multi-tenant architecture with isolated workspaces, locations, and configurations",
      "Point-of-sale system with cart management, sales processing, and terminal support",
      "Automated invoice generation with customizable templates",
      "Comprehensive stock management with movement tracking and adjustments",
      "Role-based access control (RBAC) with module-level granularity and auto-initialized roles",
      "Session-based authentication with OTP verification and onboarding flow",
      "Subscription packages with feature gating",
      "Auto-generated Swagger/OpenAPI documentation",
      "CI/CD pipeline — lint, type-check, unit tests, E2E tests, and Docker build in parallel",
      "Multi-environment Docker Compose setup (dev, staging, production)",
    ],
    challenges: [
      "Designed a multi-tenant data isolation strategy using Prisma with 13 domain schemas and tenant-scoped queries",
      "Built a modular RBAC system with auto-initialization of default roles and permissions on tenant creation",
      "Implemented a layered security middleware chain — Helmet, CSRF, rate limiting, request timeouts, and response sanitization",
      "Set up parallel CI/CD pipelines with service containers for PostgreSQL and Redis to run E2E tests in GitHub Actions",
    ],
    role: "Backend Developer",
    featured: true,
  },
  {
    slug: "talento",
    title: "Talento — Social Networking Platform",
    shortDescription:
      "A social networking backend with real-time chat, communities, posts & feeds, stories, and notification system.",
    description:
      "Built the backend for a social networking platform that enables users to create profiles, share posts with media, join and manage communities, chat in real-time, and publish stories with automatic expiration. The system features JWT-based authentication with email OTP verification, a follow/unfollow social graph, a threaded comment system with nested replies, in-app notifications with read/unread tracking, and media uploads to DigitalOcean Spaces. Real-time messaging is powered by Socket.io with online/offline presence tracking. Deployed via CI/CD pipeline using GitHub Actions and Docker.",
    thumbnail: "/images/talento-server.png",
    images: ["/images/talento-server.png"],
    liveUrls: [
      {
        label: "API Server",
        url: "https://talento-server.asadullah.dev",
      },
    ],
    githubUrls: [
      {
        label: "Backend",
        url: "https://github.com/Asadullah246/talento-nodejs",
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "JWT",
      "Nodemailer",
      "DigitalOcean Spaces",
      "Multer",
      "Jest",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "User profiles with follow/unfollow system, search, and suggestions",
      "Posts & feeds with image/video uploads and paginated timelines",
      "Threaded comment system with nested replies and comment likes",
      "Community management with admin/moderator roles and invitations",
      "Real-time one-to-one chat with online/offline presence via Socket.io",
      "Stories with automatic 24-hour expiration",
      "In-app notifications for likes, comments, follows, and invitations",
      "OTP-based email verification via Nodemailer",
      "Media uploads to DigitalOcean Spaces (S3-compatible)",
      "CI/CD pipeline — GitHub Actions → Docker Hub → VPS deployment",
    ],
    challenges: [
      "Built a real-time messaging system with Socket.io supporting online/offline presence tracking and message delivery",
      "Designed a threaded comment architecture with nested replies, like counts, and efficient pagination",
      "Implemented a community system with role-based access (admin, moderator, member) and invitation workflows",
      "Set up automated CI/CD pipeline deploying Docker images to a VPS via GitHub Actions",
    ],
    role: "Backend Developer",
    featured: true,
  },
];
