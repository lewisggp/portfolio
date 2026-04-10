import { AuroraText } from "./ui/aurora-text";
import { BlurFade } from "./ui/blur-fade";

interface AboutProps {
  about: {
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

export default function About({ about }: AboutProps) {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4 relative max-w-xs mx-auto lg:max-w-none lg:mx-0">
          <BlurFade delay={0.2} direction="up" inView>
            <div className="aspect-auto rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-2 relative z-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                alt="Abstract representation of high-tech digital intelligence"
                src="/images/portrait.jfif"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </BlurFade>
        </div>
        <div className="lg:col-span-8">
          <BlurFade delay={0.3} direction="up" inView>
            <h3 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight">
              {about.title1} <AuroraText>{about.title2}</AuroraText>
            </h3>
          </BlurFade>
          <BlurFade delay={0.4} direction="up" inView>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: about.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: about.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: about.p3 }} />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
