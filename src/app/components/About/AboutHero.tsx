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
      <div className="relative h-[500px] w-full bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat rounded-md flex items-center  lg:items-stretch">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

        <div className="relative lg:basis-[70%] p-5 lg:p-20 flex flex-col gap-y-5 text-white">
          <h1 className={`${playfairDisplay.className} text-3xl lg:text-[56px] font-medium`}>
            About CASCADE
          </h1>
          <div className="lg:px-20 max-w-full lg:max-w-[704px]">
            <p className="text-sm lg:text-base font-normal font-source">
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
    </section>
  );
};

export default AboutHero;
