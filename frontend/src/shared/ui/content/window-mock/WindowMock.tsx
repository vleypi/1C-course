import { joinClassNames } from "@/shared/lib";
import { WindowTitleBar } from "@/shared/ui/content/window-mock/WindowTitleBar";

interface IWindowMockProps {
  title: string;
  items: readonly string[];
  selected?: string;
  caption?: string;
}

export const WindowMock = ({ title, items, selected, caption }: IWindowMockProps) => (
  <figure className="mt-8">
    <div className="overflow-hidden rounded-2xl bg-paper text-ink shadow-xl">
      <WindowTitleBar title={title} />
      <ul className="space-y-1 p-3 font-mono text-base">
        {items.map((item) => (
          <li
            key={item}
            className={joinClassNames("rounded-lg px-3 py-2", item === selected && "bg-accent font-semibold")}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
  </figure>
);
