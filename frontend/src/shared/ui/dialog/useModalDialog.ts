import { useLayoutEffect, useRef } from "react";

export const useModalDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();
    return () => dialog.close();
  }, []);

  return dialogRef;
};
