import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://arslanqadeerdata.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Data Analyst & Power BI Developer Pakistan`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Arslan Qadeer is a Data Analyst in Rawalpindi and Islamabad, Pakistan. Explore his SQL, Power BI and business intelligence portfolio.",
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Data Analyst",
    "Data Analyst Pakistan",
    "Data Analyst Rawalpindi",
    "Data Analyst Islamabad",
    "Power BI Developer Pakistan",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Microsoft Excel",
    "Power Query",
    "Data Visualization",
    "Arslan Qadeer",
    "Data Analyst Portfolio",
    "SQL Power BI Portfolio Pakistan",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  category: "Data analytics portfolio",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profile.name} | Data Analyst & Power BI Developer Pakistan`,
    description:
      "Data Analyst in Rawalpindi and Islamabad, Pakistan, specializing in SQL, Excel, Power Query and Power BI dashboards.",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Arslan Qadeer, Data Analyst and Power BI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Data Analyst & Power BI Developer Pakistan`,
    description:
      "Data Analyst in Rawalpindi and Islamabad, Pakistan, specializing in SQL, Excel, Power Query and Power BI dashboards.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        jobTitle: profile.title,
        description:
          "Arslan Qadeer is a Data Analyst in Rawalpindi and Islamabad, Pakistan, specializing in SQL, Power BI and business intelligence.",
        image: `${siteUrl}${profile.avatar}`,
        email: profile.email,
        telephone: `+${profile.whatsapp.number}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rawalpindi",
          addressRegion: "Islamabad Capital Territory",
          addressCountry: "PK",
        },
        areaServed: [
          { "@type": "City", name: "Rawalpindi" },
          { "@type": "City", name: "Islamabad" },
          { "@type": "Country", name: "Pakistan" },
        ],
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
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} | Data Analyst & Power BI Portfolio`,
        description:
          "SQL and Power BI portfolio of a Data Analyst serving Rawalpindi, Islamabad and Pakistan.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${profile.name} | Data Analyst & Power BI Developer Pakistan`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#homepage`,
        url: siteUrl,
        name: `${profile.name} | Data Analyst & Power BI Developer Pakistan`,
        description:
          "Portfolio of Arslan Qadeer, a Data Analyst in Rawalpindi and Islamabad, Pakistan, specializing in SQL, PostgreSQL, Excel, Power Query and Power BI.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        primaryImageOfPage: `${siteUrl}/opengraph-image.png`,
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-base-950 text-gray-200 antialiased">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
