import { Suspense } from "react";
import { courseRepository } from "@/entities/course";
import { ContentSkeleton, Container } from "@/shared/ui";
import { AppHeader } from "@/widgets/app-header";
import { PROFILE_PAGE_TEXT } from "@/views/profile/constants/profile-page.constant";
import { ProfileSettings } from "@/views/profile/components/ProfileSettings";

export const ProfilePage = () => {
  const [previewModule] = courseRepository.getCourse().modules;

  return (
    <>
      <AppHeader />
      <main>
        <Container width="narrow" className="pb-24 pt-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{PROFILE_PAGE_TEXT.title}</h1>
          <Suspense fallback={<ContentSkeleton />}>
            <ProfileSettings previewModule={previewModule} />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
