import { Children, isValidElement, type ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";
import { CARD_GRID_COLUMNS, DEFAULT_CARD_GRID_COLUMNS } from "@/shared/ui/content/card/card-grid.constant";

interface ICardGridProps {
  children: ReactNode;
}

export const CardGrid = ({ children }: ICardGridProps) => {
  const cardCount = Children.toArray(children).filter(isValidElement).length;

  return (
    <div className={joinClassNames("mt-8 grid gap-4", CARD_GRID_COLUMNS[cardCount] ?? DEFAULT_CARD_GRID_COLUMNS)}>
      {children}
    </div>
  );
};
