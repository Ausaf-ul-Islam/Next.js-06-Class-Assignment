import React from "react";
import "./globals.css"; 

export const metadata = {
  title: "E-commerce Site",
  description: "A simple e-commerce site using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
