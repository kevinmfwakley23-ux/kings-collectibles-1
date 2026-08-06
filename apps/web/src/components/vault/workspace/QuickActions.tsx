"use client";

import { useState } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

import { DeleteCollectibleDialog } from "../../dialogs/DeleteCollectibleDialog";
import { EditCollectibleDialog } from "../../dialogs/EditCollectibleDialog";

export function QuickActions() {
  const {
    selectedItem,
    vault,
    refresh,
    setKeeper,
    setSelectedItem,
  } = useKingdom();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const disabled = selectedItem === null;

  return (
    <>
      <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
        <h3 className="text-lg font-semibold gold-text">
          Quick Actions
        </h3>

        <div className="mt-5 grid gap-3">
          <button
            disabled={disabled}
            onClick={() => setEditOpen(true)}
            className="rounded-xl border border-stone-700 px-4 py-3 text-left transition hover:border-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Edit Collectible
          </button>

          <button
            disabled={disabled}
            onClick={() => {
              if (!selectedItem) return;

              vault.toggleFavorite(selectedItem.id);

              const updated =
                vault.getItem(selectedItem.id);

              if (updated) {
                setSelectedItem(updated);
              }

              refresh();

              setKeeper({
                mood: "celebrating",
                message: updated?.favorite
                  ? `"${updated.title}" marked as favorite.`
                  : `"${updated?.title}" removed from favorites.`,
              });
            }}
            className="rounded-xl border border-stone-700 px-4 py-3 text-left transition hover:border-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Toggle Favorite
          </button>

          <button
            disabled={disabled}
            onClick={() => setDeleteOpen(true)}
            className="rounded-xl border border-red-700 px-4 py-3 text-left text-red-300 transition hover:border-red-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Delete Collectible
          </button>
        </div>
      </section>

      <EditCollectibleDialog
        open={editOpen}
        item={selectedItem}
        onCancel={() => setEditOpen(false)}
        onSave={(item) => {
          vault.updateItem(item);

          setSelectedItem(item);

          refresh();

          setKeeper({
            mood: "celebrating",
            message: `"${item.title}" updated successfully.`,
          });

          setEditOpen(false);
        }}
      />

      <DeleteCollectibleDialog
        open={deleteOpen}
        title={selectedItem?.title ?? ""}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => {
          if (!selectedItem) return;

          vault.removeItem(selectedItem.id);

          setKeeper({
            mood: "watching",
            message: `"${selectedItem.title}" removed from the Royal Vault.`,
          });

          setSelectedItem(null);

          refresh();

          setDeleteOpen(false);
        }}
      />
    </>
  );
}
