import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: siteConfig.socials.email,
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              className="text-lg font-bold text-foreground hover:text-[var(--accent)] transition-colors"
            >
              {siteConfig.name}
              <span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-secondary/60 text-muted-foreground hover:text-[var(--accent)] hover:bg-secondary transition-all"
              >
                <link.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-[var(--accent)] fill-[var(--accent)]" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
