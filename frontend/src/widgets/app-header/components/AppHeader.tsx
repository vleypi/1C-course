import Link from "next/link";
import type { ReactNode } from "react";
import { ROUTES } from "@/shared/config";
import { Container } from "@/shared/ui";
import { APP_HEADER_TEXT } from "@/widgets/app-header/constants/app-header.constant";
import { LogoMark } from "@/widgets/app-header/components/LogoMark";
import { ProfileLink } from "@/widgets/app-header/components/ProfileLink";

interface IAppHeaderProps {
  actions?: ReactNode;
}

export const AppHeader = ({ actions }: IAppHeaderProps) => (
  <header className="sticky top-0 z-20 bg-ink/90 backdrop-blur">
    <Container className="flex items-center justify-between gap-4 py-4">
      <Link href={ROUTES.home} className="group flex items-center gap-3">
        <LogoMark />
        <span className="text-lg font-semibold tracking-tight">{APP_HEADER_TEXT.title}</span>
      </Link>
      <div className="flex items-center gap-3">
        {actions}
        <ProfileLink />
      </div>
    </Container>
  </header>
);
