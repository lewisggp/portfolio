import { AuroraText } from "./ui/aurora-text";
import { BlurFade } from "./ui/blur-fade";

export default function About() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4 relative max-w-xs mx-auto lg:max-w-none lg:mx-0">
          <BlurFade delay={0.2} direction="up" inView>
            <div className="aspect-square rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-2 relative z-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                alt="Abstract representation of high-tech digital intelligence"
                src="/images/portrait.png"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </BlurFade>
        </div>
        <div className="lg:col-span-8">
          <BlurFade delay={0.3} direction="up" inView>
            <h3 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight">
              Bridging Complex Systems & <br />
              <AuroraText>& Scalable Solutions.</AuroraText>
            </h3>
          </BlurFade>
          <BlurFade delay={0.4} direction="up" inView>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                My name is Lewis Garcia. My journey in programming began in my
                childhood with C++. Today, I specialize in architecting and
                developing{" "}
                <strong>
                  complex integration solutions and SaaS platforms.
                </strong>
              </p>
              <p>
                I graduated with honors as a Computer Engineer and currently
                share my expertise as an Adjunct Professor at Universidad de
                Oriente. I am passionate about transforming technical challenges
                into elegant, robust software solutions.
              </p>
              <p>
                My most ambitious projects include a high-performance{" "}
                <strong>flight booking platform</strong> that unifies providers
                with different processes, and{" "}
                <strong>IoT control systems</strong> for the oil and gas
                industry.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
