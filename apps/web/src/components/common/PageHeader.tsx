type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold gold-text">
        {title}
      </h1>

      <p className="mt-2 muted-text">
        {subtitle}
      </p>
    </header>
  );
}
