import type { ReactNode } from "react";

interface ISettingsSectionProps {
  title: string;
  children: ReactNode;
}

export const SettingsSection = ({ title, children }: ISettingsSectionProps) => (
  <section className="mt-12">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="mt-4 rounded-2xl border-2 border-line p-6 sm:p-8">{children}</div>
  </section>
);
