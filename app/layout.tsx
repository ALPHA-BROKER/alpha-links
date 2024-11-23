import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ALPHA BROKER",
  description:
    "Powerful management and automation platform built for Solana blockchain, designed to simplify token launches and drive you token performance.",
  openGraph: {
    title: "ALPHA BROKER",
    description:
      "Powerful management and automation platform built for Solana blockchain, designed to simplify token launches and drive you token performance.",
    images: [
      {
        url: "/preview-image.png",
        width: 640,
        height: 360,
        alt: "Preview image of Alpha Broker platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALPHA BROKER",
    description:
      "Powerful management and automation platform built for Solana blockchain, designed to simplify token launches and drive you token performance.",
    images: ["/preview-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#040708]`}
      >
        {children}
      </body>
    </html>
  );
}
