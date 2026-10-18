interface IMetaListProps {
  items: readonly string[];
}

export const MetaList = ({ items }: IMetaListProps) => (
  <ul className="mt-8 flex flex-wrap gap-2 text-sm">
    {items.map((item) => (
      <li key={item} className="rounded-full bg-raise px-3 py-1.5 text-muted">
        {item}
      </li>
    ))}
  </ul>
);
