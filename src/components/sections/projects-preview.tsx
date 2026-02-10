"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="Things I&apos;ve built"
            description="A selection of projects that showcase my skills and problem-solving approach"
          />
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <div className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-[var(--accent)]/30 transition-all card-hover h-full flex flex-col">
                {/* Thumbnail area */}
                <div className="relative h-48 md:h-56 bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[#d4a853]/10" />
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Overlay links on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    {project.liveUrls && project.liveUrls.length > 0 && (
                      <a
                        href={project.liveUrls[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                        className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-4.5 w-4.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground font-medium">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Live links */}
                  {project.liveUrls && project.liveUrls.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
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

                {/* Full card link overlay */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} details`}
                >
                  <span className="sr-only">View project details</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        {projects.length > featuredProjects.length && (
          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl gap-2 px-8"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
