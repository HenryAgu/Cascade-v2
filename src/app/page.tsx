import type { Metadata } from "next";
import Banner from "./components/Banner";
import GetEnrolled from "./components/GetEnrolled";
import HomeAboutSection from "./components/Home/HomeAboutSection";
import HomeHero from "./components/Home/HomeHero";
import WhyCascade from "./components/Home/WhyCascade";
import NextStep from "./components/NextStep";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";

export const metadata: Metadata = {
  title: "Cascade | Empowering Learning Through Innovation",
  description: "Cascade is a leading edtech platform dedicated to transforming education with innovative learning solutions, interactive courses, and career-driven programs.",  
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


export default function Home() {
  return (
    <main className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
      <HomeHero />
      <HomeAboutSection />
      <WhyCascade />
      <GetEnrolled/>
      <Banner />
      <Testimonial/>
      <Faq/>
      <NextStep />
    </main>
  );
}
