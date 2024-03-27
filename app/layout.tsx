import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar/Navbar";
import RegisterModal from "@components/modals/RegisterModal";
import LoginModal from "@components/modals/LoginModal";
import ClientOnly from "@components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeHaven",
  description: "airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
