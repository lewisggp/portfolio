import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Footer from "../components/Footer";
import {
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  STACK_GROUPS,
  STACK_CARDS,
} from "../data/portfolio";
import MouseBackground from "../components/MouseBackground";
import BackgroundGlows from "../components/BackgroundGlows";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundGlows />
      <MouseBackground />
      <Navbar />
      <Hero />
      <Experience items={EXPERIENCE_DATA} />
      <Projects items={PROJECTS_DATA} />
      <Stack groups={STACK_GROUPS} cards={STACK_CARDS} />
      <About />
      <Footer />
    </main>
  );
}
