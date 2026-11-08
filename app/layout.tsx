import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project Rebirth — Rebuilding lives and livelihoods",
  description:
    "Community development, support for internally displaced people, and economic opportunities across Nigeria. Rebuilding lives and livelihoods with dignity since 2018.",
  generator: "Rebirth 4 Change",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
