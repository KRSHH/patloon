import type { Metadata } from "next";
import { Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
// old font -> Josefin_Sans
const josefin_Sans = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "CodePatloon",
  description: "Blogs, Socials, and many more",
  openGraph: {
    images: [
      {
        url: "https://Patloon.wtf/og-image.png",
        width: 2005,
        height: 1103,
        alt: "Patloon.wtf banner",
      },
    ],
  },
  metadataBase: {
    host: "https://Patloon.wtf",
    href: "/",
    origin: "https://Patloon.wtf",
    password: "Patloon",
    hash: "Patloon",
    pathname: "/",
    search: "",
    username: "Patloon",
    hostname: "Patloon.wtf",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://Patloon.wtf/",
    toJSON: () => "https://Patloon.wtf/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://Patloon.wtf",
    creator: "https://Patloon.wtf",
    title: "@CodePatloon's Portfolio",
    description:
      "Blogs, Socials, and many more.",
    images: [
      {
        url: "https://Patloon.wtf/og-image.png",
        width: 2005,
        height: 1103,
        alt: "Patloon.wtf banner",
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
      <body className={`${josefin_Sans.className} bg-black h-screen`}>{children}</body>
    </html>
  );
}
