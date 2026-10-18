import { Suspense } from "react";
import type { ILessonRouteParams, IRouteParamsProps } from "@/shared/config";
import { Container, ContentSkeleton } from "@/shared/ui";
import { AppHeader } from "@/widgets/app-header";
import { LessonContentLoader } from "@/views/lesson/components/LessonContentLoader";
import { TopicLinkLoader } from "@/views/lesson/components/TopicLinkLoader";

export const LessonPage = ({ params }: IRouteParamsProps<ILessonRouteParams>) => (
  <>
    <AppHeader
      actions={
        <Suspense fallback={null}>
          <TopicLinkLoader params={params} />
        </Suspense>
      }
    />
    <main>
      <Container width="narrow">
        <Suspense fallback={<ContentSkeleton />}>
          <LessonContentLoader params={params} />
        </Suspense>
      </Container>
    </main>
  </>
);
