"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutHero from "../components/About/AboutHero";
import Faq from "../components/Faq";
import AboutSection from "../components/About/AboutSection";
import Banner from "../components/Banner";
import HowWeWork from "../components/About/HowWeWork";
import ContactBanner from "../components/ContactBanner";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
      <Navbar/>
      <AboutHero />
      <AboutSection />
      <HowWeWork />
      <Faq />
      <Banner />
      <ContactBanner />
    </main>
  );
};

export default AboutUsPage;
