import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 max-w-fit shadow-2xl">
        <div className="flex items-center gap-2">
          <Link
            className="text-white font-black tracking-tight text-xl"
            href="#hero"
          >
            Lewis Garcia
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            href="#stack"
          >
            Stack
          </Link>
          <Link
            className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            href="#about"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4 border-l border-white/10 pl-8">
          <button className="flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-primary transition-colors cursor-pointer">
            <span className="text-primary">EN</span>
            <span className="text-white/20">/</span>
            <span>ES</span>
          </button>
          <Link
            href="mailto:lewisggp@gmail.com"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(13,166,242,0.4)] cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
