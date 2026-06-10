import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnia.ahmedsamra.com"),

  title: {
    default: "أمنية سمرة | لاعبة منتخب مصر للتنس",
    template: "%s | أمنية سمرة",
  },

  description:
    "الموقع الرسمي لأمنية سمرة، لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",

  keywords: [
    "أمنية سمرة",
    "Omnia Samra",
    "منتخب مصر للتنس",
    "النادي الأهلي",
    "Egypt Tennis",
    "Egypt National Team",
    "Al Ahly Tennis",
    "Junior Tennis Egypt",
  ],

  openGraph: {
    title: "أمنية سمرة | لاعبة منتخب مصر للتنس",
    description:
      "الموقع الرسمي لأمنية سمرة، لاعبة منتخب مصر للتنس ولاعبة النادي الأهلي.",
    url: "https://omnia.ahmedsamra.com",
    siteName: "Omnia Samra",
    locale: "ar_EG",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}