import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
