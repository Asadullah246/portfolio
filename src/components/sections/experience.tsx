"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences, education } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="Where I&apos;ve worked"
            description="My professional journey and educational background"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work experience */}
          <div>
            <AnimatedSection>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-8">
                <Briefcase className="h-5 w-5 text-[var(--accent)]" />
                Work Experience
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-[var(--accent)] bg-background flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    </div>

                    <div className="p-5 rounded-2xl bg-card border border-border hover:border-[var(--accent)]/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {exp.role}
                          </h4>
                          <p className="text-sm text-[var(--accent)] font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap px-2.5 py-1 rounded-full bg-secondary">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.description}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-8">
                <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
                Education
              </h3>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-[var(--accent)] bg-background flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    </div>

                    <div className="p-5 rounded-2xl bg-card border border-border hover:border-[var(--accent)]/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {edu.degree} in {edu.field}
                          </h4>
                          <p className="text-sm text-[var(--accent)] font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap px-2.5 py-1 rounded-full bg-secondary">
                          {edu.period}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
