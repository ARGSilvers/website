import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argsilvers.com"),
  title: {
    default:
      "A.R.G SILVERS | Traditional Silver Craftsmanship Since 1925 | Kumbakonam",
    template: "%s | A.R.G SILVERS Kumbakonam",
  },
  description:
    "A.R.G Silvers is a family-run traditional silver manufacturing business in Kumbakonam, Tamil Nadu, with heritage craftsmanship dating back to 1925. Three generations making sacred temple articles, Varalakshmi Amman faces, traditional silver kuthuvillakku lamps, kavasam, and custom silver articles.",
  keywords: [
    "A.R.G Silvers",
    "ARG Silvers Kumbakonam",
    "silver manufacturers Kumbakonam",
    "traditional silver products Kumbakonam",
    "silver handicrafts Kumbakonam",
    "traditional silver manufacturers Tamil Nadu",
    "silver temple articles manufacturers",
    "temple kavasam silver Kumbakonam",
    "Varalakshmi Amman silver face",
    "Varalakshmi Amman mugam silver",
    "silver kuthuvilaku manufacturers",
    "Kuthu Villakku silver",
    "handcrafted silver pooja items wholesale",
    "wholesale silver manufacturers Tamil Nadu",
    "silver idol kavasam artisans",
    "Kumbakonam silver craft heritage",
    "Mukkannar street silver workshops",
    "Thanjavur silver craft",
    "South Indian traditional silver articles",
    "temple silver donations Kumbakonam",
  ],
  authors: [{ name: "A.R.G Silvers Family", url: "https://argsilvers.com" }],
  creator: "A.R.G Silvers",
  publisher: "A.R.G Silvers",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://argsilvers.com",
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
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://argsilvers.com",
    siteName: "A.R.G SILVERS Kumbakonam",
    title:
      "A.R.G SILVERS | Traditional Silver Craftsmanship Since 1925 | Kumbakonam",
    description:
      "Family-run traditional silver manufacturing business in Kumbakonam, Tamil Nadu. Handcrafting sacred temple articles, Varalakshmi Amman, and traditional silver articles across three generations.",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "A.R.G SILVERS - Traditional Silver Craftsmanship Since 1925 Kumbakonam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.R.G SILVERS | Traditional Silver Craftsmanship Since 1925",
    description:
      "Handcrafted silver traditions from Kumbakonam, Tamil Nadu. 100+ years and three generations of craftsmanship.",
    images: ["/images/hero-banner.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Kumbakonam",
    "geo.position": "10.9602;79.3845",
    "ICBM": "10.9602, 79.3845",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": "https://argsilvers.com/#organization",
    name: "A.R.G SILVERS",
    alternateName: ["ARG Silvers", "A.R.G. Silvers Kumbakonam"],
    url: "https://argsilvers.com",
    logo: "https://argsilvers.com/images/logo/arg-logo-white.png",
    image: "https://argsilvers.com/images/hero-banner.jpg",
    description:
      "Family-run traditional silver manufacturing business in Kumbakonam, Tamil Nadu with family craftsmanship dating back to 1925. Specialising in temple kavasam, Varalakshmi Amman faces, traditional lamps, and custom silver articles.",
    foundingDate: "1925",
    taxID: "33AMLPR4706M1ZN",
    founder: {
      "@type": "Person",
      name: "Late A. Rajamanikam",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "37/73 Mukkannar Street",
      addressLocality: "Kumbakonam",
      addressRegion: "Tamil Nadu",
      postalCode: "612001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9602",
      longitude: "79.3845",
    },
    telephone: ["+919952843287", "+919944654778", "+919087603033"],
    email: "argsilvers@gmail.com",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    knowsAbout: [
      "Traditional Silver Craftsmanship",
      "Temple Silver Kavasam",
      "Varalakshmi Amman Silver Face",
      "Silver Kuthu Villakku Lamps",
      "Handcrafted Silverware",
      "South Indian Temple Articles",
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5EADF] text-[#292824]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
