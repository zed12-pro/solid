import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectComponent from "@/app/projects/page"; 
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E9E5E2] dark:bg-gray-950 transition-colors">
      <Navbar />
      <Hero />
      <ProjectComponent />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}