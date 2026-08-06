"use client";

type Props = {
  rookie?: boolean;
  autograph?: boolean;
  memorabilia?: boolean;
  favorite?: boolean;
};

export function CollectibleBadges({
  rookie,
  autograph,
  memorabilia,
  favorite,
}: Props) {
  const badges = [
    rookie && "Rookie",
    autograph && "Autograph",
    memorabilia && "Memorabilia",
    favorite && "Favorite",
  ].filter(
    (badge): badge is string =>
      Boolean(badge)
  );

  if (badges.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
