import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "알려줘랭짱 | YouTube Channel Clone",
  description:
    "Next.js App Router 기반으로 구현된 유튜브 채널 페이지 클론 프로젝트. FSD 및 RSC 아키텍처를 적용하여 성능과 확장성을 최적화했습니다. (랭디 사전 과제)",
  openGraph: {
    title: "알려줘랭짱 | YouTube Channel Clone (랭디 과제)",
    description: "Next.js App Router 기반, 성능 최적화 아키텍처 적용",
    siteName: "YouTube Clone Project",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
