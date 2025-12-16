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

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        <Header />
        <SocialSidebar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;