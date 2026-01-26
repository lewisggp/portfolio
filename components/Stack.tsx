import { BlurFade } from "./ui/blur-fade";
import { StackItem, StackCardItem } from "../data/portfolio";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

const iconMap: Record<string, string> = {
  Nodejs: "nodejs02-svgrepo-com.svg",
  Typescript: "typescript-svgrepo-com.svg",
  Javascript: "javascript-155-svgrepo-com.svg",
  Nextjs: "nextjs-fill-svgrepo-com.svg",
  Prisma: "prisma-svgrepo-com.svg",
  React: "react-svgrepo-com.svg",
  Material: "materialui-svgrepo-com.svg",
  Tailwind: "tailwind-css-svgrepo-com.svg",
  Git: "git-svgrepo-com.svg",
  n8n: "n8n_full_black_logo.svg",
  AWS: "aws-svgrepo-com.svg",
  Docker: "docker-svgrepo-com.svg",
  Redis: "redis-svgrepo-com.svg",
  Django: "django-svgrepo-com.svg",
  Python: "python-127-svgrepo-com.svg",
  Storage: "database-svgrepo-com.svg",
  GraphQL: "graphql-fill-svgrepo-com.svg",
  PowerBI: "powerbi-svgrepo-com.svg",
  Postgre: "postgresql-svgrepo-com.svg",
  Mongodb: "mongodb-svgrepo-com.svg",
};

interface StackProps {
  groups: StackItem[];
  cards: StackCardItem[];
}

export default function Stack({ groups, cards }: StackProps) {
  const firstCards = cards.slice(0, cards.length / 2);
  const secondCards = cards.slice(cards.length / 2);

  return (
    <section
      className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5"
      id="stack"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <BlurFade delay={0.2} direction="up" inView>
            <h2 className="text-white text-3xl font-black tracking-tight mb-6">
              Technical Ecosystem
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              My stack built for performance, security, and developer
              productivity.
            </p>
          </BlurFade>
          <div className="space-y-4">
            {groups.map((group, index) => (
              <BlurFade
                key={index}
                delay={0.3 + index * 0.05}
                direction="up"
                inView
              >
                <div className="flex items-center gap-4 group">
                  <div className="size-10 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary">
                      {group.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {group.items}
                    </p>
                    <p className="text-white/40 text-xs">{group.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-center overflow-hidden">
          <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={1} direction={1} className="py-4">
              {firstCards.map((card, index) => (
                <div key={index} className="mx-2">
                  <BlurFade
                    delay={0}
                    direction="up"
                    inView
                    className="w-[160px] h-[120px] backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 border-b-2 border-b-transparent hover:border-b-primary transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-2 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20"
                  >
                    {iconMap[card.icon] ? (
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={`/icons/${iconMap[card.icon]}`}
                          alt={card.title}
                          className="w-full h-full object-contain invert"
                        />
                      </div>
                    ) : (
                      <span className="material-symbols-outlined !text-4xl text-white/40">
                        {card.icon}
                      </span>
                    )}
                    <span className="text-white/70 text-xs font-bold tracking-widest text-center">
                      {card.title}
                    </span>
                  </BlurFade>
                </div>
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={1} direction={-1} className="py-4">
              {secondCards.map((card, index) => (
                <div key={index} className="mx-2">
                  <BlurFade
                    delay={0}
                    direction="up"
                    inView
                    className="w-[160px] h-[120px] backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 border-b-2 border-b-transparent hover:border-b-primary transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-2 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20"
                  >
                    {iconMap[card.icon] ? (
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={`/icons/${iconMap[card.icon]}`}
                          alt={card.title}
                          className="w-full h-full object-contain invert"
                        />
                      </div>
                    ) : (
                      <span className="material-symbols-outlined !text-4xl text-white/40">
                        {card.icon}
                      </span>
                    )}
                    <span className="text-white/70 text-xs font-bold tracking-widest text-center">
                      {card.title}
                    </span>
                  </BlurFade>
                </div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
}
