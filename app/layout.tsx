import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hotel Thamel Park Spa | Luxury Boutique Hotel in Kathmandu",
  description:
    "Experience premium luxury, Korean wellness, and elegant accommodation in the heart of Thamel, Kathmandu at Hotel Thamel Park Spa.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Hotel Thamel Park Spa | Luxury Boutique Hotel",
    description:
      "Experience premium luxury, Korean wellness, and elegant accommodation in the heart of Thamel, Kathmandu.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Thamel Park Spa",
    description:
      "Experience premium luxury, Korean wellness, and elegant accommodation in the heart of Thamel, Kathmandu.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel Thamel Park Spa",
  description:
    "Premium luxury boutique hotel in Thamel offering Korean Spa experiences.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thamel",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
