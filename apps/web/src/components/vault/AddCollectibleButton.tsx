type AddCollectibleButtonProps = {
  onClick?: () => void;
};

export function AddCollectibleButton({
  onClick,
}: AddCollectibleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        kingdom-hover
        rounded-xl
        border
        border-amber-500/30
        bg-amber-500/10
        px-5
        py-3
        font-semibold
        text-white
      "
    >
      ➕ Add Collectible
    </button>
  );
}
