import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import SocialSidebar from "@/components/SocialSidebar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Index = () => {
  const [scrollInstance, setScrollInstance] = useState<LocomotiveScroll | null>(null);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <BackToTop scrollInstance={scrollInstance} />
      <Header />
      <SocialSidebar />
      <LocomotiveScrollWrapper onMount={setScrollInstance}>
        <div className="min-h-screen">
          <SectionReveal>
            <Hero />
          </SectionReveal>
          <SectionReveal>
            <About />
          </SectionReveal>
          <SectionReveal>
            <Projects />
          </SectionReveal>
          <SectionReveal>
            <Skills />
          </SectionReveal>
          <SectionReveal>
            <Achievements />
          </SectionReveal>
          <SectionReveal>
            <Education />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
          <Footer />
        </div>
      </LocomotiveScrollWrapper>
    </>
  );
};

export default Index;