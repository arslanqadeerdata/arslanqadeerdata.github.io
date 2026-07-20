import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://arslanqadeerdata.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.subheadline,
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Power Query",
    "Data Visualization",
    "Arslan Qadeer",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.subheadline,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subheadline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.headline,
    email: profile.email,
    telephone: `+${profile.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi / Islamabad",
      addressCountry: "Pakistan",
    },
    url: siteUrl,
    sameAs: [profile.socials.github, profile.socials.linkedin],
    knowsAbout: [
      "Data Analysis",
      "Business Intelligence",
      "SQL",
      "PostgreSQL",
      "Power BI",
      "Power Query",
      "Microsoft Excel",
      "Data Visualization",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-base-950 text-gray-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
