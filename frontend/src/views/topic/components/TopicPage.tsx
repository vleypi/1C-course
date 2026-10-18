import { Suspense } from "react";
import type { IRouteParamsProps, ITopicRouteParams } from "@/shared/config";
import { Container, ContentSkeleton, Panel } from "@/shared/ui";
import { AppHeader } from "@/widgets/app-header";
import { TopicLessonsLoader } from "@/views/topic/components/TopicLessonsLoader";

export const TopicPage = ({ params }: IRouteParamsProps<ITopicRouteParams>) => (
  <>
    <AppHeader />
    <Container width="narrow" className="py-10">
      <Panel>
        <Suspense fallback={<ContentSkeleton />}>
          <TopicLessonsLoader params={params} />
        </Suspense>
      </Panel>
    </Container>
  </>
);
