"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="min-h-screen pt-32 lg:pt-20 bg-white text-black">
      <Navbar/>
      <div className="flex flex-col w-full container mx-auto lg:px-14 xl:px-20 px-5">
        <h1
          className="uppercase font-medium font-source text-[65px] lg:text-[160px] tracking-[-5px]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
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
