import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "charminarsd",
  description: "Online Odering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
