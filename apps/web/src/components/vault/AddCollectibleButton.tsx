type AddCollectibleButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export function AddCollectibleButton({
  onClick,
  disabled = false,
}: AddCollectibleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-xl
        bg-amber-500
        px-5
        py-3
        font-semibold
        text-black
        transition
        hover:bg-amber-400
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      + Add Collectible
    </button>
  );
}
