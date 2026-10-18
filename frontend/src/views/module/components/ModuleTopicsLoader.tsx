import type { IRouteParamsProps, IModuleRouteParams } from "@/shared/config";
import { ModuleTopics } from "@/widgets/module-topics";
import { resolveModule } from "@/views/module/utils/resolve-module";

export const ModuleTopicsLoader = async ({ params }: IRouteParamsProps<IModuleRouteParams>) => (
  <ModuleTopics module={resolveModule(await params)} />
);
