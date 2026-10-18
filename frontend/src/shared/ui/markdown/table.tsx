import type { ComponentProps } from "react";

export const Table = (props: ComponentProps<"table">) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
    <table className="w-full text-left text-base" {...props} />
  </div>
);

export const TableHead = (props: ComponentProps<"thead">) => (
  <thead className="bg-raise text-sm uppercase tracking-wider text-muted" {...props} />
);

export const TableRow = (props: ComponentProps<"tr">) => (
  <tr className="border-t border-line/60 first:border-t-0" {...props} />
);

export const TableHeaderCell = (props: ComponentProps<"th">) => (
  <th className="px-4 py-3 font-medium" {...props} />
);

export const TableCell = (props: ComponentProps<"td">) => <td className="px-4 py-4" {...props} />;
