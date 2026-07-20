import AuroraBackground from "@/components/effects/AuroraBackground";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import LoadingScreen from "@/components/effects/LoadingScreen";
import SmoothScroll from "@/components/effects/SmoothScroll";
import FloatingWhatsApp from "@/components/effects/FloatingWhatsApp";

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

export default function Home() {
  return (
    <>
      {/* global effects */}
      <LoadingScreen />
      <AuroraBackground />
      <CustomCursor />
      <ScrollProgress />
      <SmoothScroll />
      <FloatingWhatsApp />

      <Navbar />

      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <CareerGoal />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
