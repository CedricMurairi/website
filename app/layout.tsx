import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclid = localFont({
  src: '../public/fonts/euclid-circular-a.ttf',
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "Cedric Murairi — Founder of CodeXtreme",
  description:
    "Engineer, innovator, and craftsman working at the intersection of technology, business, and education in Africa.",
  metadataBase: new URL("https://www.murairi.com"),
  openGraph: {
    title: "Cedric Murairi — Founder of CodeXtreme",
    description:
      "Engineer, innovator, and craftsman working at the intersection of technology, business, and education in Africa.",
    url: "https://www.murairi.com",
    siteName: "Cedric Murairi",
    images: [
      {
        url: "https://www.murairi.com/images/my-dp-image-crop.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Cedric Murairi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedric Murairi — Founder of CodeXtreme",
    description:
      "Engineer, innovator, and craftsman working at the intersection of technology, business, and education in Africa.",
    images: ["https://www.murairi.com/images/my-dp-image-crop.jpg"],
    creator: "@CedricMurairi",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Cedric Murairi",
    "CodeXtreme",
    "African Tech",
    "Software Engineer",
    "Innovation",
    "Tech Talent",
    "4th Industrial Revolution",
    "Africa Technology",
    "Tech Solutions",
    "Tech Founder",
    "Tech Community",
    "Tech Education",
    "Tech Development",
    "Business and Technology",
    "Education Technology",
    "Tech Craftsmanship",
    "Tech Leadership",
    "Tech Entrepreneur",
    "Tech Visionary",
    "Tech Advocate",
    "Tech Builder",
    "Tech Creator",
    "Tech Innovator",
    "Tech Strategist",
    "Tech Consultant",
    "Tech Speaker",
  ],
  authors: [{ name: "Cedric Murairi", url: "https://www.murairi.com" }],
  creator: "Cedric Murairi",
  publisher: "Cedric Murairi",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${euclid.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
