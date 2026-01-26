import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Stack from "../../components/Stack";
import Footer from "../../components/Footer";
import { STACK_CARDS } from "../../data/portfolio";
import MouseBackground from "../../components/MouseBackground";
import BackgroundGlows from "../../components/BackgroundGlows";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundGlows />
      <MouseBackground />
      <Navbar dictionary={dictionary.navbar} lang={lang} />
      <Hero hero={dictionary.hero} />
      <Experience experience={dictionary.experience} />
      <Projects projects={dictionary.projects} />
      <Stack stack={dictionary.stack} cards={STACK_CARDS} />
      <About about={dictionary.about} />
      <Footer footer={dictionary.footer} />
    </main>
  );
}
