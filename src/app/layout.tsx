import type { Metadata } from "next";
import { Outfit, Archivo_Black } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Taushik Chandana | UI/UX Designer",
  description:
    "Minimal editorial UI/UX designer portfolio for Taushik Chandana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  );
}
