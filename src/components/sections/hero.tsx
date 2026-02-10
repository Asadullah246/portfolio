"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: siteConfig.socials.email, label: "Email" },
];

const techHighlights = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#d4a853]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/3 rounded-full blur-[200px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-xl md:text-2xl lg:text-xl xl:text-2xl text-muted-foreground font-medium"
            >
              {siteConfig.role}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-base md:text-lg text-muted-foreground/80 max-w-xl leading-relaxed"
            >
              {siteConfig.bio}
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <Button
                asChild
                size="lg"
                className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white rounded-xl px-8 h-12 text-sm font-semibold shadow-lg shadow-[var(--accent)]/20 transition-all hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-8 h-12 text-sm font-semibold hover:-translate-y-0.5 transition-all"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-secondary/60 text-muted-foreground hover:text-[var(--accent)] hover:bg-secondary hover:-translate-y-0.5 transition-all"
                >
                  <link.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column — Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-[var(--accent)]/10 rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[#d4a853]/20 rounded-full" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden ring-2 ring-[var(--accent)]/20 ring-offset-4 ring-offset-background">
                <Image
                  src="/images/asadullah-44.png"
                  alt={`${siteConfig.name} - ${siteConfig.role}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 380px"
                />
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-[var(--accent)]/15 backdrop-blur-sm border border-[var(--accent)]/20"
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-[#d4a853]/15 backdrop-blur-sm border border-[#d4a853]/20"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
