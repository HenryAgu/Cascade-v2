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
      <Navbar />
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
              Ready to Transform Your Students' Future? Partner with Cascade
              Africa to elevate your school to new heights as a center of
              innovation and student success. Let's collaborate to develop a
              customized implementation plan that fits your school's unique
              needs and resources. Don't miss this opportunity to prepare your
              students for the digital economy!
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
