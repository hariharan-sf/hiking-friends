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
  title: "Hiking Friends Sri Lanka",
  description: "Guided hiking adventures across Hatton highlands, Sri Lanka.",
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
