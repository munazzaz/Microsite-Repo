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

const siteUrl = "https://microsite-lime.vercel.app";


export const metadata: Metadata = {
  title: "Beiz",
  description: "Pre-Register Your Spot",
   openGraph: {
    title: "Beiz | Pre-Register for Exclusive Beta",
    description: "Join Beiz today and secure your early access to a revolutionary networking experience.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "Beiz Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beiz | Pre-Register for Exclusive Beta",
    description: "Secure your spot on Beiz—the future of networking is here. Limited beta slots available!",
    images: [`${siteUrl}/logo-og.png`],
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
