import { Suspense } from "react";
import type { IRouteParamsProps, IModuleRouteParams } from "@/shared/config";
import { ContentSkeleton, RouteDialog } from "@/shared/ui";
import { ModuleTopicsLoader } from "@/views/module/components/ModuleTopicsLoader";

export const ModuleDialog = ({ params }: IRouteParamsProps<IModuleRouteParams>) => (
  <RouteDialog>
    <Suspense fallback={<ContentSkeleton />}>
      <ModuleTopicsLoader params={params} />
    </Suspense>
  </RouteDialog>
);
