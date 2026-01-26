export default function ScrollSnapPage() {
  return (
    // Padre: scroll-snap-y obligatorio
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen w-full snap-start bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Sección 1</h1>
      </section>

      <section className="h-screen w-full snap-start bg-red-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Sección 2</h1>
      </section>

      <section className="h-screen w-full snap-start bg-green-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Sección 3</h1>
      </section>
    </main>
  );
}
