"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, fadeInUp } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";

export function TechStack() {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="Technologies I work with"
            description="The tools and frameworks I use to build modern, scalable applications"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-[var(--accent)]/20 transition-all h-full">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {category.description}
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={fadeInUp}
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl bg-secondary/80 text-secondary-foreground border border-border hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
