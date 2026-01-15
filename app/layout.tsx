import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paborito | Premium Poultry Health Supplements",
  description: "Boost your poultry's health and productivity with Paborito's premium digestive health supplements. Trusted by Filipino farmers since 2012.",
  keywords: ["poultry supplements", "chicken health", "egg production", "poultry farming", "Philippines", "Progastro"],
  authors: [{ name: "Paborito Agribiotech Solutions, Corp." }],
  openGraph: {
    title: "Paborito | Premium Poultry Health Supplements",
    description: "Boost your poultry's health and productivity with Paborito's premium digestive health supplements.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
