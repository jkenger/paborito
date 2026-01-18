import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
