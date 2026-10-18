import type { Metadata } from "next";
import { PROFILE_PAGE_TEXT, ProfilePage } from "@/views/profile";

export const metadata: Metadata = {
  title: PROFILE_PAGE_TEXT.title,
};

export default function Page() {
  return <ProfilePage />;
}
