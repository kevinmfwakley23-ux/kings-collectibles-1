export function KingdomLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-3xl">
        👑
      </div>

      <div>
        <h1 className="text-3xl font-bold gold-text">
          K.I.N.G.S.
        </h1>

        <p className="text-xs uppercase tracking-[0.3em] muted-text">
          Collector's Kingdom
        </p>
      </div>
    </div>
  );
}
