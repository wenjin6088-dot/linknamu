import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김개발 | 링크나무",
  description: "김개발의 링크를 한곳에서 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
