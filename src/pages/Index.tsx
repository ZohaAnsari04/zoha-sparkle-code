import Hero from "@/components/Hero";

import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import AIShowcase from "@/components/AIShowcase";

import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import SocialSidebar from "@/components/SocialSidebar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LenisScrollWrapper from "@/components/LenisScrollWrapper";
import SectionReveal from "@/components/SectionReveal";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ClickSpark from "@/components/ClickSpark";
import { useState } from "react";
import Lenis from "lenis";

const Index = () => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  return (
    <>
      <ClickSpark
        sparkColor="var(--spark-color)"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={450}
      />
      <Preloader />
      <BackgroundBlobs />
      <ScrollProgress />
      <BackToTop lenisInstance={lenisInstance} />
      <Header />
      <SocialSidebar />
      <LenisScrollWrapper onMount={setLenisInstance}>
        <div className="min-h-screen">
          <SectionReveal>
            <Hero />
          </SectionReveal>

          <SectionReveal>
            <Journey />
          </SectionReveal>
          <SectionReveal>
            <Projects />
          </SectionReveal>
          <SectionReveal>
            <AIShowcase />
          </SectionReveal>

          <SectionReveal>
            <Achievements />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
          <Footer />
        </div>
      </LenisScrollWrapper>
    </>
  );
};

export default Index;