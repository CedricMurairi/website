import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclid = localFont({
  src: '../public/fonts/euclid-circular-a.ttf',
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "Cedric Murairi - Founder of CodeXtreme",
  description: "Engineer, Innovator and Superior Craftsman working at the intersection of technology, business and education in Africa.",
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
