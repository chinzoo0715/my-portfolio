import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skill from "@/components/Skill";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

export default function HomeOnePage() {
  return (
    <NoxfolioLayout onePageMenu={true}>
      <Hero />
      <About />
      <Resume />
      <Skill />
      <Projects />
      <Contact />
    </NoxfolioLayout>
  );
}
