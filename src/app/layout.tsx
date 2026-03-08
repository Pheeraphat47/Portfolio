import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pheeraphat Portfolio",
  description: "Pheeraphat Dherachaisuphakij - IT & Product Manager Portfolio",
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
