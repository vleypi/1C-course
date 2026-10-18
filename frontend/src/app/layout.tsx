import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { APP_METADATA } from "@/shared/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: APP_METADATA.title,
    template: APP_METADATA.titleTemplate,
  },
  description: APP_METADATA.description,
};

export default function RootLayout({ children, modal }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-ink font-sans text-zinc-100 selection:bg-accent selection:text-ink">
        {children}
        {modal}
      </body>
    </html>
  );
}
