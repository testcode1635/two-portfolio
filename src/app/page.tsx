import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

import { ProjectsSection } from "@/sections/ProjectsSection";
import Testimonials from "@/sections/Testimonials";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      {/* <Intro /> */}
      <Projects />
      <Testimonials />
      <FAQs />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
}
