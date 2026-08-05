type HeaderActionProps = {
  icon: string;
  label: string;
};

export function HeaderAction({
  icon,
  label,
}: HeaderActionProps) {
  return (
    <button
      className="
        kingdom-hover
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-amber-500/20
        bg-stone-900/70
        px-4
        py-2
      "
    >
      <span className="text-lg">{icon}</span>

      <span className="text-sm text-white">
        {label}
      </span>
    </button>
  );
}
