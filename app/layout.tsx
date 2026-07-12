import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://declut.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Declut — Simplify Your Space, Amplify Your Life",
    template: "%s | Declut",
  },
  description:
    "Turn clutter into cash effortlessly with Declut. List your household items for sale and unlock new possibilities for your space and wallet.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Declut",
    title: "Declut — Simplify Your Space, Amplify Your Life",
    description:
      "Turn clutter into cash effortlessly with Declut. List your household items for sale and unlock new possibilities for your space and wallet.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Declut — buy and sell household items",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Declut — Simplify Your Space, Amplify Your Life",
    description:
      "Turn clutter into cash effortlessly with Declut. List your household items for sale and unlock new possibilities for your space and wallet.",
    images: ["/images/og-image.png"],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Declut",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Declut",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Declut",
      applicationCategory: "ShoppingApplication",
      operatingSystem: "iOS, Android",
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
