import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Font configuration
const josefin_Sans = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "800"] });

// Metadata configuration
export const metadata: Metadata = {
  title: "CodePatloon",
  description: "Blogs, Socials, and many more",
  openGraph: {
    images: [
      {
        url: "https://nigga.website/og-image.png",
        width: 2005,
        height: 1103,
        alt: "nigga.website banner",
      },
    ],
  },
  metadataBase: new URL("https://nigga.website"), // Simplified metadataBase for Next.js 14
  twitter: {
    card: "summary_large_image",
    site: "https://nigga.website",
    creator: "https://nigga.website",
    title: "@CodePatloon's Portfolio",
    description: "Blogs, Socials, and many more.",
    images: [
      {
        url: "https://nigga.website/og-image.png",
        width: 2005,
        height: 1103,
        alt: "nigga.website banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Umami Tracking Script 
          - strategy="afterInteractive" ensures fast page loads
          - data-domains allows tracking across root and all subdomains
        */}
        <Script
          async
          src="https://anna.nigga.website/anna"
          data-website-id="1d9cd7a8-42d3-4f2d-9e6f-aa7516a7d82f"
          data-domains="nigga.website,anna.nigga.website"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${josefin_Sans.className} bg-black h-screen`}>
        {children}
      </body>
    </html>
  );
}