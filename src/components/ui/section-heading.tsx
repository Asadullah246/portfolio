import { type ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  children,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 md:mb-18 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {label && (
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-[var(--accent)] mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
