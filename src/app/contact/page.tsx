import React from "react";
import ContactBanner from "../components/ContactBanner";
import { MdArrowOutward } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 lg:pt-20 bg-white text-black">
      <div className="flex flex-col w-full container mx-auto lg:px-20 px-5">
        <h1 className="uppercase font-medium font-source text-[65px] lg:text-[160px] tracking-[-5px]">
          say hello!
        </h1>
        <div className="lg:pb-32 flex lg:flex-row flex-col gap-x-10 gap-y-20">
          <div className="basis-full lg:basis-[50%]">
            <p className="font-source font-normal text-xl lg:text-[32px] text-black2 max-w-[600px]">
              Ready to elevate your code base to new heights? Experience the
              exceptional expertise of a skilled mentor who effortlessly propels
              projects to the next level. Let&lsquo;s partner with your needs to
              maximize your code's potential. Don't miss out on this
              opportunity!
            </p>
          </div>
          <div className="basis-full lg:basis-[50%] w-full mb-14 lg:mb-0">
            <form action="" className="flex flex-col gap-y-1.5 lg:gap-y-5">
              <input
                type="text"
                name="text"
                id=""
                placeholder="Your name here"
                className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium"
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your email here"
                className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium"
              />
              <textarea
                name="message"
                id=""
                placeholder="Message"
                className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium resize-none h-[180px] lg:h-[35vh]"
              />
              <button className="border flex items-center justify-between border-black2 text-left py-[14px] lg:py-[18px] px-5 max-w-full lg:max-w-[322px] rounded-full text-lg lg:text-[22px] font-source mt-5 lg:mt-10 cursor-pointer">
                <span>Let's talk</span>
                <MdArrowOutward className="text-2xl lg:text-3xl font-light"/>
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default ContactPage;
