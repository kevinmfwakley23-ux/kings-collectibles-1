type AddCollectibleButtonProps = {
  onClick?: () => void;
};

export function AddCollectibleButton({
  onClick,
}: AddCollectibleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400"
    >
      + Add Collectible
    </button>
  );
}
