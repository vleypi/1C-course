import { Suspense } from "react";
import type { IRouteParamsProps, ITopicRouteParams } from "@/shared/config";
import { ContentSkeleton, RouteDialog } from "@/shared/ui";
import { TopicLessonsLoader } from "@/views/topic/components/TopicLessonsLoader";

export const TopicDialog = ({ params }: IRouteParamsProps<ITopicRouteParams>) => (
  <RouteDialog>
    <Suspense fallback={<ContentSkeleton />}>
      <TopicLessonsLoader params={params} />
    </Suspense>
  </RouteDialog>
);
