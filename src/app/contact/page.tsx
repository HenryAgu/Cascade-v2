import React from "react";
import ContactBanner from "../components/ContactBanner";
import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Cascade | Empowering Learning Through Innovation",
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
    title: "Contact Cascade | Empowering Learning Through Innovation",
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
    title: "Contact Cascade | Empowering Learning Through Innovation",
    description:
      "Unlock new opportunities with Cascade's interactive courses, expert insights, and career-focused learning programs.",
    images: ["https://your-website-url.com/twitter-image.jpg"],
  },
};
const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 lg:pt-20 bg-white text-black">
      <div className="flex flex-col w-full container mx-auto lg:px-20 px-5">
        <h1 className="uppercase font-medium font-source text-[65px] lg:text-[160px] tracking-[-5px]">
          say hello!
        </h1>
        <div className="lg:pb-32 lg:pt-22 flex lg:flex-row flex-col gap-x-10 gap-y-20">
          <div className="basis-full lg:basis-[50%]">
            <p className="font-source font-normal text-xl lg:text-[32px] text-black2 max-w-[600px]">
              Ready to elevate your code base to new heights? Experience the
              exceptional expertise of a skilled mentor who effortlessly propels
              projects to the next level. Let&apos;s partner with your needs to
              maximize your code&apos;s potential. Don&apos;t miss out on this
              opportunity!
            </p>
          </div>
          <div className="basis-full md:w-[70%] lg:w-full lg:basis-[50%] w-full mb-14 lg:mb-0">
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default ContactPage;
