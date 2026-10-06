import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argsilvers.com"),
  title: {
    default: "A.R.G SILVERS | Traditional Silver Handicrafts Since 1925 | Kumbakonam",
    template: "%s | A.R.G SILVERS Kumbakonam",
  },
  description:
    "A.R.G Silvers is a family-run traditional silver manufacturing business from Kumbakonam, Tamil Nadu, with craftsmanship dating back to 1925. Three generations making sacred temple articles, Varalakshmi Amman, traditional lamps, and custom silver articles.",
  keywords: [
    "A.R.G Silvers",
    "silver manufacturers in Kumbakonam",
    "traditional silver products Kumbakonam",
    "silver handicrafts Kumbakonam",
    "traditional silver manufacturers Tamil Nadu",
    "silver temple articles",
    "silver devotional products",
    "silver lamps",
    "Varalakshmi Amman silver",
    "Kuthu Villakku silver",
    "silver kavasam",
    "Kumbakonam silver craft",
  ],
  authors: [{ name: "A.R.G Silvers Family" }],
  creator: "A.R.G Silvers",
  publisher: "A.R.G Silvers",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://argsilvers.com",
    siteName: "A.R.G SILVERS Kumbakonam",
    title: "A.R.G SILVERS | Traditional Silver Handicrafts Since 1925 | Kumbakonam",
    description:
      "Family-run traditional silver manufacturing business from Kumbakonam, Tamil Nadu. Handcrafting temple articles, Varalakshmi Amman, and traditional silver articles across three generations.",
    images: [
      {
        url: "/images/products/amman-mugam-silver.png",
        width: 1200,
        height: 630,
        alt: "A.R.G SILVERS - Traditional Silver Craftsmanship Since 1925",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.R.G SILVERS | Traditional Silver Handicrafts Since 1925",
    description:
      "Handcrafted silver traditions from Kumbakonam, Tamil Nadu. 100+ years and three generations of craftsmanship.",
    images: ["/images/products/amman-mugam-silver.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "A.R.G SILVERS",
    description:
      "Traditional silver manufacturing business from Kumbakonam, Tamil Nadu with family craftsmanship dating back to 1925.",
    foundingDate: "1925",
    founder: {
      "@type": "Person",
      name: "Rajamanikam",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "37/73 Mukkannar Street",
      addressLocality: "Kumbakonam",
      addressRegion: "Tamil Nadu",
      postalCode: "612001",
      addressCountry: "IN",
    },
    telephone: ["+91 9952843287", "+91 9944654778", "+91 9087603033"],
    email: "gajendrangnanasekaran@gmail.com",
    areaServed: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFBF7] text-[#151C26]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
