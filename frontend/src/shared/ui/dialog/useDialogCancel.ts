import type { SyntheticEvent } from "react";

export const useDialogCancel = (onCancel: () => void) =>
  (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onCancel();
  };
