import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const AboutHero = () => {
  return (
    <section className="w-full container mx-auto px-5 lg:px-20">
      <div className="relative lg:h-[500px] pt-28 lg:pt-0 pb-5 lg:pb-0 w-full bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat rounded-md flex items-center  lg:items-stretch">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

        <div className="relative lg:basis-[70%] p-5 lg:p-20 flex flex-col gap-y-5 text-white">
          <h1
            className={`${playfairDisplay.className} text-3xl lg:text-[56px] font-medium`}
          >
            About CASCADE
          </h1>
          <div className="max-w-full lg:max-w-[704px]">
            <p className="text-sm lg:text-base font-normal font-source max-w-full lg:max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              repellendus consequatur facilis fuga recusandae magnam accusamus
              quas dolorum. Saepe deserunt laborum labore obcaecati voluptas,
              amet tempora nam consequatur nesciunt?
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="px-5 py-2.5 border border-white rounded-full text-white text-sm lg:text-base font-source font-normal transition-colors ease-in-out duration-200 hover:bg-white hover:text-black2"
              >
                Get your school involved
              </Link>
            </div>
          </div>
        </div>

        <div className="relative basis-[30%] hidden lg:flex justify-between bg-transparent">
          <div className="bg-white px-2"></div>
          <div className="flex-1 bg-transparent rounded-md"></div>
          <div className="bg-white px-2"></div>
          <div className="flex-1 bg-transparent rounded-md"></div>
          <div className="bg-white px-2"></div>
          <div className="flex-1 bg-transparent rounded-md"></div>
        </div>
      </div>
      <div className="bg-white rounded-md lg:p-10 py-10 flex flex-col gap-5 lg:gap-10 justify-end w-fit">
        <div className="flex gap-x-5 lg:gap-x-14">
          <div className="flex flex-col gap-y-1.5">
            <p className="font-source text-xl lg:text-2xl font-semibold lg:font-normal text-black">120+</p>
            <span className="font-source text-sm lg:text-base font-normal text-black">
              Active client
            </span>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <p className="font-source text-xl lg:text-2xl font-semibold lg:font-normal text-black">120+</p>
            <span className="font-source text-sm lg:text-base font-normal text-black">
              Active Schools
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-y-1.5">
            <p className="font-source text-xl lg:text-2xl font-semibold lg:font-normal text-black">120+</p>
            <span className="font-source text-sm lg:text-base font-normal text-black">
              School Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
