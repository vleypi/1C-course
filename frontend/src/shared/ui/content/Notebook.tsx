interface INotebookProps {
  title: string;
  entries: readonly string[];
}

export const Notebook = ({ title, entries }: INotebookProps) => (
  <figure className="mt-8 -rotate-[0.6deg] rounded-2xl bg-paper p-6 font-mono text-base text-ink shadow-xl sm:p-8">
    <figcaption className="text-sm font-bold uppercase tracking-widest text-ink/50">{title}</figcaption>
    <ul className="mt-4 space-y-2 border-l-2 border-red-400/60 pl-4">
      {entries.map((entry) => (
        <li key={entry}>{entry}</li>
      ))}
    </ul>
  </figure>
);
