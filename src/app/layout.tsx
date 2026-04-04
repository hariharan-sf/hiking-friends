import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: [
    {
      path: "../../public/font/Raleway-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/font/Raleway-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../../public/font/Playfair-VariableFont_opsz,wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/font/Playfair-Italic-VariableFont_opsz,wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-luxury",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Hiking Friends Sri Lanka",
    template: "%s | Hiking Friends Sri Lanka",
  },
  description: "Guided hiking adventures across Hatton highlands, Sri Lanka.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hiking Friends Sri Lanka",
    description: "Guided hiking adventures across Hatton highlands, Sri Lanka.",
    url: "/",
    siteName: "Hiking Friends Sri Lanka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-desktop.webp",
        width: 1920,
        height: 1080,
        alt: "Hiking Friends Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking Friends Sri Lanka",
    description: "Guided hiking adventures across Hatton highlands, Sri Lanka.",
    images: ["/images/hero-desktop.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${playfair.variable} antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
