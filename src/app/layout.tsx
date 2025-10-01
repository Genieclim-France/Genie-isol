import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

// EmOne variants
const EmOneSemiBold = localFont({
  src: [
    {
      path: "./fonts/EmOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EmOne-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-em-one",
});

// Kollektif variants
const Kollektif = localFont({
  src: [
    {
      path: "./fonts/Kollektif.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kollektif-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Kollektif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Kollektif-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-kollektif",
});

export const metadata: Metadata = {
  title: "Génie Isol France",
  description:
    "GENIE ISOL FRANCE est le spécialiste de la rénovation globale énergétique. Profitez de la rénovation de votre système de chauffage, de distribution d'eau chaude sanitaire mais également de votre isolation à prix mini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${EmOneSemiBold.variable} ${Kollektif.variable}`}>
        {/* <Axeptio /> */}
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
