import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Lightbulb,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/ui/animated-section";
import { projects } from "@/data/projects";
import type { Metadata, ResolvingMetadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Generate static paths for all projects */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** Dynamic metadata for SEO */
export async function generateMetadata(
  { params }: ProjectPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="section-padding pt-28 md:pt-36">
      <div className="section-container max-w-4xl">
        {/* Back button */}
        <AnimatedSection>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>
          </Button>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Action buttons */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white rounded-xl gap-2"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                className="rounded-xl gap-2"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </AnimatedSection>

        {/* Thumbnail area */}
        <AnimatedSection delay={0.15}>
          <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl bg-secondary overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[#d4a853]/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-foreground/5">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <Separator className="my-10" />

        {/* Details grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2 space-y-10">
            {/* Features */}
            <AnimatedSection>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground mb-4">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent)]" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <AnimatedSection delay={0.1}>
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground mb-4">
                    <Lightbulb className="h-5 w-5 text-[var(--accent)]" />
                    Challenges & Solutions
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d4a853] shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Role */}
            {project.role && (
              <AnimatedSection delay={0.15}>
                <div className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <User className="h-4 w-4 text-[var(--accent)]" />
                    My Role
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.role}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Tech stack */}
            <AnimatedSection delay={0.2}>
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Back to projects */}
        <AnimatedSection delay={0.25}>
          <div className="mt-16 pt-8 border-t border-border">
            <Button
              asChild
              variant="outline"
              className="rounded-xl gap-2"
            >
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
