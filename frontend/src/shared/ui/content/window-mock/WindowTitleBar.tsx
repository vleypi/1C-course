const DOT_COLORS = ["bg-red-400", "bg-amber-400", "bg-emerald-400"];

interface IWindowTitleBarProps {
  title: string;
}

export const WindowTitleBar = ({ title }: IWindowTitleBarProps) => (
  <div className="flex items-center gap-3 border-b border-ink/10 bg-ink/5 px-4 py-2.5">
    <span className="flex gap-1.5" aria-hidden="true">
      {DOT_COLORS.map((color) => (
        <span key={color} className={`size-3 rounded-full ${color}`} />
      ))}
    </span>
    <span className="text-sm font-semibold text-ink/70">{title}</span>
  </div>
);
