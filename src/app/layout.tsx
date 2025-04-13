import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import QueryClientProviderWrapper from "./components/QueryWrapper";

const SourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cascade | Empowering Learning Through Innovation",
  description:
    "Cascade is a leading edtech platform dedicated to transforming education with innovative learning solutions, interactive courses, and career-driven programs.",
  keywords: [
    "Edtech",
    "Online Learning",
    "Education Technology",
    "Interactive Courses",
    "Career Development",
    "E-Learning",
    "Cascade Platform",
    "Student Success",
    "Digital Education",
    "Professional Growth",
  ],
  openGraph: {
    title: "Cascade | Empowering Learning Through Innovation",
    description:
      "Join Cascade and access cutting-edge learning resources, expert-led courses, and career development opportunities in one powerful platform.",
    url: "https://cascade-v2.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cascade - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cascade | Transforming Education",
    description:
      "Unlock new opportunities with Cascade's interactive courses, expert insights, and career-focused learning programs.",
    images: ["https://your-website-url.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SourceSans.className} antialiased bg-white`}>
        <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
