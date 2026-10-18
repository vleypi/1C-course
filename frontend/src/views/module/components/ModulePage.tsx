import { Suspense } from "react";
import type { IRouteParamsProps, IModuleRouteParams } from "@/shared/config";
import { Container, ContentSkeleton, Panel } from "@/shared/ui";
import { AppHeader } from "@/widgets/app-header";
import { ModuleTopicsLoader } from "@/views/module/components/ModuleTopicsLoader";

export const ModulePage = ({ params }: IRouteParamsProps<IModuleRouteParams>) => (
  <>
    <AppHeader />
    <Container width="narrow" className="py-10">
      <Panel>
        <Suspense fallback={<ContentSkeleton />}>
          <ModuleTopicsLoader params={params} />
        </Suspense>
      </Panel>
    </Container>
  </>
);
