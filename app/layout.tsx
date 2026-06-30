import PersonSchema from "@/components/PersonSchema";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnia.ahmedsamra.com"),

  title: {
    default: "أمنية أحمد سمرة | لاعبة منتخب مصر للتنس",
    template: "%s | أمنية أحمد سمرة",
  },

  description:
    "الموقع الرسمي لأمنية أحمد سمرة، لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي. أخبار البطولات والإنجازات والصور وأحدث المشاركات المحلية والدولية.",

  keywords: [
    "أمنية أحمد سمرة",
    "أمنية سمرة",
    "Omnia Samra",
    "منتخب مصر للتنس",
    "النادي الأهلي",
    "بطولات التنس",
    "Egypt Tennis",
    "Egypt National Tennis Team",
    "Al Ahly Tennis",
    "Junior Tennis Egypt",
  ],

  authors: [
    {
      name: "Ahmed Samra",
    },
  ],

  creator: "Ahmed Samra",

  openGraph: {
    title: "أمنية أحمد سمرة | لاعبة منتخب مصر للتنس",
    description:
      "الموقع الرسمي لأمنية أحمد سمرة لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",
    url: "https://omnia.ahmedsamra.com",
    siteName: "Omnia Samra",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "أمنية أحمد سمرة | لاعبة منتخب مصر للتنس",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "أمنية أحمد سمرة | لاعبة منتخب مصر للتنس",
    description:
      "الموقع الرسمي لأمنية أحمد سمرة لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",
    images: ["/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://omnia.ahmedsamra.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body
  className={`${cairo.className} min-h-full flex flex-col bg-black text-white`}
>
  <GoogleTagManager gtmId="GTM-N76WPPPQ" />

  <PersonSchema />

  <Navbar />

  {children}
</body>
    </html>
  );
}