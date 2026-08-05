"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (item: {
    title: string;
    brand: string;
    set: string;
    cardNumber: string;
    player: string;
    year: number;
    manufacturer: string;
    purchasePrice: number;
    estimatedValue: number;
    notes: string;
  }) => void;
};

export function AddCollectibleDialog({
  open,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [setName, setSetName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [player, setPlayer] = useState("");
  const [manufacturer, setManufacturer] =
    useState("");
  const [year, setYear] = useState("");
  const [purchasePrice, setPurchasePrice] =
    useState("");
  const [estimatedValue, setEstimatedValue] =
    useState("");
  const [notes, setNotes] = useState("");

  if (!open) return null;

  function save() {
    if (!title.trim()) return;

    onSave({
      title,
      brand,
      set: setName,
      cardNumber,
      player,
      manufacturer,
      year: Number(year) || new Date().getFullYear(),
      purchasePrice:
        Number(purchasePrice) || 0,
      estimatedValue:
        Number(estimatedValue) || 0,
      notes,
    });

    setTitle("");
    setBrand("");
    setSetName("");
    setCardNumber("");
    setPlayer("");
    setManufacturer("");
    setYear("");
    setPurchasePrice("");
    setEstimatedValue("");
    setNotes("");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border border-amber-500/20 bg-stone-900 p-8">
        <h2 className="text-3xl font-bold gold-text">
          Add Collectible
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Title"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            placeholder="Brand"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={setName}
            onChange={(e) =>
              setSetName(e.target.value)
            }
            placeholder="Set"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value)
            }
            placeholder="Card Number"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={player}
            onChange={(e) =>
              setPlayer(e.target.value)
            }
            placeholder="Player / Character"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={manufacturer}
            onChange={(e) =>
              setManufacturer(e.target.value)
            }
            placeholder="Manufacturer"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
            placeholder="Year"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={purchasePrice}
            onChange={(e) =>
              setPurchasePrice(e.target.value)
            }
            placeholder="Purchase Price"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <input
            value={estimatedValue}
            onChange={(e) =>
              setEstimatedValue(e.target.value)
            }
            placeholder="Estimated Value"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3"
          />

          <textarea
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="Notes"
            className="rounded-xl border border-stone-700 bg-stone-800 p-3 md:col-span-2"
            rows={4}
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-stone-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={save}
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black"
          >
            Save Collectible
          </button>
        </div>
      </div>
    </div>
  );
}
