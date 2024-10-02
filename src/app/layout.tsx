import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next js",
  description: "next js docs",
  keywords: "next, freamework,javascript,",
  openGraph: {
    title: "NEXT JS",
    description:
      "Get started by editing src/app/page.tsx. Save and see your changes instantly.",
    type: "website",
    url: "https://meta-tags-test.vercel.app/",
    images: [
      {
        url: "https://meta-tags-test.vercel.app/public/test.jpg",
        width: 1200,
        height: 630,
        alt: "logo",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
