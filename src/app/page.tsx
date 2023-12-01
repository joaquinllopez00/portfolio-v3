import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:py-24 md:pt-0 pt-0 gap-24">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
    </main>
  );
}
