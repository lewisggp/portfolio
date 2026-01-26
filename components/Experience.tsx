import { BlurFade } from "./ui/blur-fade";
import { ExperienceItem } from "../data/portfolio";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5"
      id="experience"
    >
      <BlurFade delay={0.2} direction="up" inView>
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl font-black tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A trajectory of building scalable software and architectural
            solutions across enterprises.
          </p>
        </div>
      </BlurFade>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block opacity-30"></div>
        <div className="space-y-12">
          {items.map((item, index) => (
            <BlurFade
              key={item.id}
              delay={0.25 + index * 0.05}
              direction="up"
              inView
              className={`relative flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } md:justify-between items-center group`}
            >
              <div
                className={`hidden md:block w-[45%] ${
                  index % 2 !== 0 ? "text-left pl-12" : "text-right pr-12"
                }`}
              >
                <span className="text-primary font-bold text-sm tracking-widest">
                  {item.period}
                </span>
                {item.title && (
                  <h4 className="text-white text-xl font-black mt-2">
                    {item.title}
                  </h4>
                )}
                <p className="text-white/40 text-sm mt-1">{item.description}</p>
              </div>
              <div
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${
                  index === 0
                    ? "bg-primary shadow-[0_0_15px_rgba(13,166,242,0.8)] border-4 border-background-dark"
                    : index === 1
                      ? "bg-primary/40 border-4 border-background-dark"
                      : "bg-primary/20 border-4 border-background-dark"
                } -translate-x-1/2 z-20 hidden md:block`}
              ></div>
              <div className="w-full md:w-[45%] backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="md:hidden text-primary font-bold text-xs tracking-widest mb-2 block">
                      {item.period}
                    </span>
                    <h4 className="text-white text-xl font-black">
                      {item.role}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {item.company}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-white/20">
                    {item.type}
                  </span>
                </div>
                <ul className="space-y-3 text-white/60 text-sm leading-relaxed">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span> {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
