import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESDA - Enterprise Software Development Application",
  description: "A modern full-stack application built with Next.js and Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}