# Asadullah — Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Features smooth animations, dark/light theme switching, and a fully functional contact form.

🔗 **Live:** [asadullah.dev](https://asadullah.dev)

---

## ✨ Features

- **Animated Hero Section** — Profile image, tech pills, social links, and CTA buttons with Framer Motion animations
- **Tech Stack Showcase** — Skills organized by category (Frontend, Backend, Database, Tools & Integrations)
- **Experience Timeline** — Professional experience with achievements and technologies used
- **Education Section** — Academic background
- **Project Portfolio** — Featured projects with detailed case studies, live demos, and GitHub links
- **Dedicated Projects Page** — Browse all projects with individual detail pages (`/projects/[slug]`)
- **Contact Form** — Functional email delivery via [Web3Forms](https://web3forms.com) — no backend needed
- **Dark/Light Theme** — Toggle with `next-themes`, persists across sessions
- **Fully Responsive** — Mobile-first design across all breakpoints
- **SEO Optimized** — Meta tags, Open Graph images, and semantic HTML

---

## 🛠️ Tech Stack

| Category       | Technologies                      |
| -------------- | --------------------------------- |
| **Framework**  | Next.js 16 (App Router), React 19 |
| **Language**   | TypeScript                        |
| **Styling**    | Tailwind CSS 4, CSS Variables     |
| **UI**         | Radix UI, shadcn/ui, Lucide Icons |
| **Animation**  | Framer Motion                     |
| **Forms**      | React Hook Form, Zod validation   |
| **Theming**    | next-themes                       |
| **Email**      | Web3Forms API                     |
| **Deployment** | Vercel                            |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with font, theme, navbar, footer
│   ├── page.tsx                # Homepage — Hero, Skills, Experience, Education, Projects, Contact
│   ├── globals.css             # Design tokens, CSS variables, theme configuration
│   ├── not-found.tsx           # Custom 404 page
│   └── projects/
│       ├── page.tsx            # All projects listing
│       └── [slug]/page.tsx     # Individual project detail page
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Hero, TechStack, Experience, Education, ProjectsPreview, Contact
│   ├── providers/              # Theme provider
│   └── ui/                     # Reusable UI primitives (Button, Input, Textarea, etc.)
├── data/                       # Static data files
│   ├── site-config.ts          # Personal info, social links, SEO config
│   ├── skills.ts               # Skill categories and items
│   ├── experience.ts           # Work experience and education entries
│   └── projects.ts             # Project details, tech stacks, features, challenges
├── hooks/                      # Custom React hooks
└── lib/                        # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Asadullah246/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Web3Forms access key
```

### Environment Variables

| Variable                           | Description                                            | Required |
| ---------------------------------- | ------------------------------------------------------ | -------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com) | Yes      |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel project settings
4. Deploy

---

## 📝 Customization

All personal data is centralized in the `src/data/` directory:

- **`site-config.ts`** — Name, bio, email, social links, SEO metadata
- **`skills.ts`** — Add/remove skill categories and items
- **`experience.ts`** — Update work experience and education entries
- **`projects.ts`** — Add projects with descriptions, tech stacks, live URLs, and screenshots

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
