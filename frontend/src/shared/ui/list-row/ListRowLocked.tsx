import { LockIcon } from "@/shared/ui/icons/icons";
import { ListRowLayout } from "@/shared/ui/list-row/ListRowLayout";

interface IListRowLockedProps {
  index: number;
  title: string;
}

export const ListRowLocked = ({ index, title }: IListRowLockedProps) => (
  <div aria-disabled="true" className="flex cursor-not-allowed items-center gap-5 px-2 py-5 text-zinc-500">
    <ListRowLayout index={index} title={title} aside={<LockIcon className="size-4" />} />
  </div>
);
