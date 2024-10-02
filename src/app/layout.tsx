import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next js",
  description: "next js docs",
  openGraph: {
    title: "NEXT JS",
    description:
      "Get started by editing src/app/page.tsx. Save and see your changes instantly.",

    url: "https://meta-tags-test.vercel.app",
    images: [
      {
        url: "https://meta-tags-test.vercel.app/public/ts.png",
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
      <body>{children}</body>
    </html>
  );
}
