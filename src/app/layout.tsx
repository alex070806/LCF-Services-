import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const SITE_URL = "https://lcfservises.us";
const SITE_NAME = "LCF Services";
const SITE_DESCRIPTION =
  "LCF Services — professional dispatch service for auto transporters. 12% commission, no deposit, stable payouts every Friday. Spokane, WA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LCF Services — Professional Auto Transport Dispatch",
    template: "%s | LCF Services",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "auto transport dispatch",
    "car hauling",
    "LCF Services",
    "Spokane WA",
    "dispatch service",
    "owner operator",
    "car carrier",
    "auto transport company",
    "диспетчерская",
    "автоперевозки",
    "кархолинг",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LCF Services — Professional Auto Transport Dispatch",
    description: "High gross, stable loads, and personal approach to every driver. Join the LCF Services team!",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LCF Services — Auto Transport Dispatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LCF Services — Professional Auto Transport Dispatch",
    description: "High gross, stable loads, and personal approach to every driver.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Replace with actual verification code after adding site to Google Search Console
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+15097684532",
  email: "info@lcfservises.us",
  address: {
    "@type": "PostalAddress",
    streetAddress: "522 W Riverside Ave #6439",
    addressLocality: "Spokane",
    addressRegion: "WA",
    postalCode: "99201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6588,
    longitude: -117.426,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
  priceRange: "$$",
  image: `${SITE_URL}/logo.jpg`,
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#312e81" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
