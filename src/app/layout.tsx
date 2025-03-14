import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import cx from "classnames";
import "./globals.css";
import Container from "@/components/Container";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Leo Constantin",
  description: "Personal website of Leo Constantin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased overflow-x-hidden">
        <NavBar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
