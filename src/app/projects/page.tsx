import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects showcasing my skills and experience.",
};

export default function ProjectsPage() {
  return (
    <section className="section-padding pt-28 md:pt-36">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="All Projects"
            description="Everything I've built — from full-stack platforms to real-time applications"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <div className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-[var(--accent)]/30 transition-all card-hover h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-44 bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[#d4a853]/10" />
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    {project.liveUrls && project.liveUrls.length > 0 && (
                      <a
                        href={project.liveUrls[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-4.5 w-4.5" />
                      </a>
                    )}
                    {project.githubUrls && project.githubUrls.length > 0 && (
                      <a
                        href={project.githubUrls[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-4.5 w-4.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Live links */}
                  {project.liveUrls && project.liveUrls.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.liveUrls.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-20 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} details`}
                >
                  <span className="sr-only">View project details</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
