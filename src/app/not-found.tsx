import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button
            asChild
            className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white rounded-xl gap-2"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
