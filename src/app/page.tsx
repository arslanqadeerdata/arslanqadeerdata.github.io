import AuroraBackground from "@/components/effects/AuroraBackground";
import DeferredEnhancements from "@/components/effects/DeferredEnhancements";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import CareerGoal from "@/components/sections/CareerGoal";
import Contact from "@/components/sections/Contact";
import LocalExpertise from "@/components/sections/LocalExpertise";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <DeferredEnhancements />

      <Navbar />

      <main id="main-content" tabIndex={-1} className="relative scroll-mt-24 outline-none">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <CareerGoal />
        <LocalExpertise />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
