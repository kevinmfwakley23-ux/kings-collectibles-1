export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
          The Collector's Kingdom
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          K.I.N.G.S.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
          Welcome to your Kingdom.
        </p>

        <p className="mt-2 max-w-3xl text-stone-500">
          Every treasure has a home. Every collection has a story.
          Every collector deserves a Kingdom.
        </p>

        <div className="mt-16 rounded-xl border border-amber-500/30 bg-stone-900 p-8 shadow-2xl">

          <h2 className="text-2xl font-semibold text-amber-300">
            The Keeper
          </h2>

          <p className="mt-4 max-w-xl text-stone-300 italic">
            "Welcome home.
            Your Kingdom is secure.
            I will guard your treasures, preserve your memories,
            and help your collection grow."
          </p>

        </div>

      </section>
    </main>
  );
}
