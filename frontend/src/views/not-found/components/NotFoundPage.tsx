import Link from "next/link";
import { ROUTES } from "@/shared/config";
import { Container } from "@/shared/ui";
import { NOT_FOUND_TEXT } from "@/views/not-found/constants/not-found.constant";

export const NotFoundPage = () => (
  <Container width="narrow" className="py-24 text-center">
    <p className="font-mono text-sm text-accent">{NOT_FOUND_TEXT.code}</p>
    <h1 className="mt-3 text-3xl font-bold">{NOT_FOUND_TEXT.title}</h1>
    <p className="mt-4 text-muted">{NOT_FOUND_TEXT.description}</p>
    <Link href={ROUTES.home} className="mt-8 inline-block rounded-xl bg-zinc-100 px-6 py-3 font-medium text-ink">
      {NOT_FOUND_TEXT.backToProgram}
    </Link>
  </Container>
);
