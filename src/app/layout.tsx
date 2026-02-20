import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Pheeraphat Portfolio",
  description: "Pheeraphat Dherachaisuphakij - Project Manager Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.postimg.cc/9fqYVvxh/logo.png" type="image/x-icon" />
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" noModule />
      </head>
      <body>{children}</body>
    </html>
  );
}
