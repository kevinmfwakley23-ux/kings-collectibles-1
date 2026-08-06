"use client";

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeleteCollectibleDialog({
  open,
  title,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-stone-900 p-8">
        <h2 className="text-2xl font-bold text-white">
          Delete Collectible?
        </h2>

        <p className="mt-4 muted-text">
          "{title}" will be permanently removed from your Royal Vault.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-stone-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
