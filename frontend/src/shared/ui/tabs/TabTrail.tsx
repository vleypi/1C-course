import Link from "next/link";

export interface ITabTrailItem {
  label: string;
  href?: string;
}

interface ITabTrailProps {
  items: readonly ITabTrailItem[];
}

const TabLabel = ({ label, href }: ITabTrailItem) =>
  href ? (
    <Link href={href} replace className="pb-4 text-muted transition hover:text-zinc-100">
      {label}
    </Link>
  ) : (
    <span className="-mb-px border-b-2 border-zinc-100 pb-4">{label}</span>
  );

export const TabTrail = ({ items }: ITabTrailProps) => (
  <nav className="flex items-center gap-4 border-b border-line pr-12 text-lg">
    {items.map((item, index) => (
      <span key={item.label} className="flex items-center gap-4">
        {index > 0 && <span className="pb-4 text-muted">→</span>}
        <TabLabel {...item} />
      </span>
    ))}
  </nav>
);
