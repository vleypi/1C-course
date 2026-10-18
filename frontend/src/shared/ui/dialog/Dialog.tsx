"use client";

import type { ReactNode } from "react";
import { UI_TEXT } from "@/shared/ui/constants/ui-text.constant";
import { CloseIcon } from "@/shared/ui/icons/icons";
import { useBackdropClick } from "@/shared/ui/dialog/useBackdropClick";
import { useDialogCancel } from "@/shared/ui/dialog/useDialogCancel";
import { useModalDialog } from "@/shared/ui/dialog/useModalDialog";

interface IDialogProps {
  children: ReactNode;
  onClose: () => void;
}

export const Dialog = ({ children, onClose }: IDialogProps) => {
  const dialogRef = useModalDialog();
  const handleBackdropClick = useBackdropClick(onClose);
  const handleCancel = useDialogCancel(onClose);

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl bg-card text-zinc-100 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-6 sm:p-12">
        <button
          type="button"
          onClick={onClose}
          aria-label={UI_TEXT.close}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-ink/60 text-zinc-100 backdrop-blur transition hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </dialog>
  );
};
