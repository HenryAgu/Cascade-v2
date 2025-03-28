import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SourceSans.className} antialiased bg-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
