import { ReactNode } from "react";

type KingdomCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function KingdomCard({
  title,
  subtitle,
  children,
}: KingdomCardProps) {
  return (
    <section
      className="
        kingdom-panel
        kingdom-hover
        rounded-2xl
        p-6
      "
    >
      <header className="mb-5">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm muted-text">
            {subtitle}
          </p>
        )}
      </header>

      {children}
    </section>
  );
}
