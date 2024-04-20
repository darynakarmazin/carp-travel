import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
  keywords: "Carpathians, Ukraine, tralel, trip",
  icons: {
    icon: [
      {
        url: "/light-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/dark-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://carp-travel-eight.vercel.app/",
    title: "CarpTravel - trips to the beautiful parts of the Carpathians",
    description:
      "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
    siteName: "CarpTravel",
    images: [
      {
        url: "https://github.com/darynakarmazin/carp-travel/raw/main/src/app/og-image/og-image.png",
        width: 1200,
        height: 630,
        alt: "CarpTravel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
