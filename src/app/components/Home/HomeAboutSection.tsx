import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const HomeAboutSection = () => {
  const groupOfLaptops = "/images/group-of-laptops.jpg"
  const childMonitor = "/images/child-monitor.jpg"
  return (
    <section className="py-10 lg:py-20 pb-20 bg-brand-lightblue lg:px-10 xl:px-20">
      <div className=" w-full container mx-auto px-5">
        <div className="">
          <h1 className="text-white uppercase text-sm lg:text-base font-medium tracking-widest border-b-[1.5px] pb-5 border-white font-source">
            Welcome to cascade
          </h1>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-y-5 gap-x-3.5 pt-10 lg:pt-20">
          <div className="lg:basis-[20%]">
            <Image
              src={childMonitor}
              alt="child_monitor"
              width={273}
              height={216}
              className="w-full lg:w-[273px] h-[216px] object-cover aspect-[273/216] md:hidden lg:block rounded-sm"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
          <div className="basis-[80%] flex gap-x-8 w-full">
            <div className="basis-[70%] hidden lg:flex">
              <Image
                src={groupOfLaptops}
                alt="groups_of_laptops"
                width={730}
                height={536}
                className="w-full h-[536px] object-cover aspect-[730/536] rounded-sm"
              />
            </div>
            <div className="basis-[70%] lg:basis-[30%] flex flex-col gap-y-8">
              <h3
                className={`${playfairDisplay.className} text-white text-[61px] leading-[60px]`}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Student <br /> Access
              </h3>
              <p
                className="text-white text-base font-source font-normal"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                At Michigan State, we believe every student we admit has the
                ability to succeed and graduate. By 2030, we will increase the
                6-year graduation rate by 5% to 86%.
              </p>
              <Link
                href="/about"
                className="border-b w-fit px-2 text-lg text-white font-source font-normal hover:pl-0 hover:pr-4 transition-all duration-300 ease-in-out"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
