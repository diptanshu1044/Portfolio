import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Capabilities } from "@/components/Capabilities";
import { Currently } from "@/components/Currently";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="atmosphere relative min-h-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Leadership />
        <Capabilities />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
