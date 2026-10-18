import Link from "next/link";
import { Suspense } from "react";
import { ROUTES } from "@/shared/config";
import { APP_HEADER_TEXT } from "@/widgets/app-header/constants/app-header.constant";
import { HeaderAvatar } from "@/widgets/app-header/components/HeaderAvatar";

export const ProfileLink = () => (
  <Link
    href={ROUTES.profile}
    aria-label={APP_HEADER_TEXT.profile}
    className="rounded-full ring-offset-2 ring-offset-ink transition hover:ring-2 hover:ring-line"
  >
    <Suspense fallback={<span className="block size-9 rounded-full bg-raise" />}>
      <HeaderAvatar />
    </Suspense>
  </Link>
);
