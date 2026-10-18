"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Dialog } from "@/shared/ui/dialog/Dialog";

interface IRouteDialogProps {
  children: ReactNode;
}

export const RouteDialog = ({ children }: IRouteDialogProps) => {
  const router = useRouter();

  return <Dialog onClose={() => router.back()}>{children}</Dialog>;
};
