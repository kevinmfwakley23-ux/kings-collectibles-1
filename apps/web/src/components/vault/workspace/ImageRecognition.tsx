"use client";

export function ImageRecognition() {
  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Recognition Queue
      </h3>

      <div className="mt-5 rounded-xl border border-stone-700 bg-stone-800 p-4">
        OCR Engine — Waiting

        <br />

        AI Recognition — Waiting

        <br />

        Grading Detection — Waiting
      </div>
    </section>
  );
}
