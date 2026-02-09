"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Coffee } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site-config";

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    description: "Writing maintainable, production-ready code",
  },
  {
    icon: Briefcase,
    label: "Full-Stack",
    description: "End-to-end application development",
  },
  {
    icon: Coffee,
    label: "Problem Solver",
    description: "Turning complex requirements into solutions",
  },
  {
    icon: MapPin,
    label: siteConfig.location,
    description: "Open to remote opportunities",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="A bit about me"
            description="Who I am and what drives my work"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Text content */}
          <AnimatedSection>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  full-stack software engineer
                </span>{" "}
                who cares deeply about building software that solves real problems.
                I work across the entire stack — from crafting intuitive, responsive
                interfaces to designing robust APIs and database architectures.
              </p>
              <p>
                My focus is on writing{" "}
                <span className="text-foreground font-medium">
                  clean, scalable, and well-tested code
                </span>{" "}
                using modern technologies like React, Next.js, TypeScript, Node.js,
                and PostgreSQL. I&apos;m particularly experienced in building
                multi-tenant SaaS platforms with complex business logic.
              </p>
              <p>
                Beyond coding, I value{" "}
                <span className="text-foreground font-medium">
                  continuous learning
                </span>{" "}
                and staying current with the latest technologies and best practices.
                I believe great software comes from combining strong engineering
                principles with a genuine understanding of user needs.
              </p>
            </div>
          </AnimatedSection>

          {/* Highlight cards */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-[var(--accent)]/30 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--accent)]/15 transition-colors">
                    <item.icon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
