import { AuroraText } from "./ui/aurora-text";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";

interface HeroProps {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    ctaProjects: string;
    ctaResume: string;
    resumeLink: string;
  };
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div
        className="absolute inset-0 opacity-10 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(#0da6f2 1px, transparent 1px), linear-gradient(90deg, #0da6f2 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="max-w-[1000px] text-center">
        <BlurFade delay={0.2} direction="up" inView>
          <Link
            href="mailto:lewisggp@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {hero.badge}
          </Link>
        </BlurFade>

        <BlurFade delay={0.3} direction="up" inView>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8">
            {hero.title1}
            <br />
            <AuroraText>{hero.title2}</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" inView>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {hero.description}
          </p>
        </BlurFade>

        <BlurFade delay={0.5} direction="up" inView>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#projects"
              className="flex min-w-[160px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:scale-105 shadow-lg shadow-primary/20 cursor-pointer"
            >
              {hero.ctaProjects}
            </Link>
            <a
              href={hero.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[160px] items-center justify-center rounded-lg h-14 px-8 bg-white/5 border border-white/10 text-white text-base font-bold hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
            >
              {hero.ctaResume}
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
