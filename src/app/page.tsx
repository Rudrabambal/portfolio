import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-animated-gradient text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-12">
        <p>© {new Date().getFullYear()} Rudra Bambal. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ & AI</p>
      </footer>
    </main>
  );
}
