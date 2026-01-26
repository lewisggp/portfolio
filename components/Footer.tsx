import Link from "next/link";
import { BlurFade } from "./ui/blur-fade";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <BlurFade delay={0.2} direction="up" inView>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-white font-black text-xl">
                Lewis Garcia
              </span>
            </div>
            <p className="text-white/40 text-sm max-w-xs">
              Building the future of scalable intelligence. Based in Bogotá, CO.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.3} direction="up" inView>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-white/50 hover:text-white transition-colors text-sm font-medium"
              href="https://www.linkedin.com/in/lewis-garc%C3%ADa-899523209"
            >
              LinkedIn
            </a>
            <a
              className="text-white/50 hover:text-white transition-colors text-sm font-medium"
              href="https://github.com/lewisggp"
            >
              GitHub
            </a>
            <Link
              className="text-white/50 hover:text-white transition-colors text-sm font-medium"
              href="mailto:lewisggp@gmail.com"
            >
              Contact
            </Link>
          </div>
        </BlurFade>
        <BlurFade delay={0.4} direction="up" inView>
          <div className="text-white/30 text-xs font-medium">
            © 2026 Lewisggp.site. All rights reserved.
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
