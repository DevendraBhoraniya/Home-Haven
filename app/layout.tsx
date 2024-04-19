import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar/Navbar";

import RegisterModal from "@components/modals/RegisterModal";
import LoginModal from "@components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import ClientOnly from "@components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeHaven",
  description: "airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser =  await getCurrentUser()
  // console.log( "layout page",currentUser)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-24 pt-32">
          {children}
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}
