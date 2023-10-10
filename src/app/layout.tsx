import Navbar from "@/components/Navbar";
import SideLinks from "@/components/SideLinks";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Tabacaru",
  description: "Personal Portfolio Website for Eric Tabacaru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <SideLinks side="left" />
        <SideLinks side="right" />

        {children}
      </body>
    </html>
  );
}
