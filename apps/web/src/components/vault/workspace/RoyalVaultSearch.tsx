"use client";

import { useState } from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

export function RoyalVaultSearch({
  value = "",
  onChange,
}: Props) {
  const [internalValue, setInternalValue] =
    useState(value);

  const current =
    onChange === undefined
      ? internalValue
      : value;

  function update(next: string) {
    if (onChange) {
      onChange(next);
    } else {
      setInternalValue(next);
    }
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <input
        type="search"
        value={current}
        onChange={(e) =>
          update(e.target.value)
        }
        placeholder="Search your Kingdom..."
        className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 outline-none focus:border-amber-400"
      />
    </section>
  );
}
