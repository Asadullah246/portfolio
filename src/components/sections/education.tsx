"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/experience";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Education"
            title="Academic Background"
            description="My educational journey"
          />
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
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
    </section>
  );
}
