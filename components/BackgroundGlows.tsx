export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top Left - Primary Blue */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen animate-pulse duration-[4000ms]" />

      {/* Middle Right - Cyan/Teal Accent */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />

      {/* Bottom Left - Deep Blue/Purple */}
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-blue-600/15 rounded-full blur-[140px] opacity-40 mix-blend-screen" />
    </div>
  );
}
