import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LCF Services — Professional Auto Transport Dispatch",
  description:
    "LCF Services provides professional dispatch services for auto transporters. High gross, stable loads, and personal approach. Spokane, WA.",
  keywords: "auto transport, dispatch, car hauling, LCF Services, Spokane",
  openGraph: {
    title: "LCF Services — Professional Auto Transport Dispatch",
    description: "High gross, stable loads, and personal approach to every driver.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
