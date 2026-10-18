import type { MouseEvent } from "react";

export const useBackdropClick = (onBackdropClick: () => void) =>
  (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onBackdropClick();
  };
