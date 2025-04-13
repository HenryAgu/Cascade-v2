import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

interface WhyCascadeInterface {
  header: string;
  image: string;
  content: string;
  path: string;
}

const whyCascade: WhyCascadeInterface[] = [
  {
    header: "DEI PLAN",
    image: "/images/matrix.jpg",
    content:
      "The Diversity, Equity and Inclusion Strategic Plan is a comprehensive assessment and plan that identifies potential synergies, inventories efforts, pinpoints existing gaps and creates a framework for establishing MSU as a national leader in this area.",
    path: "/about",
  },
  {
    header: "DEI PLAN",
    image: "/images/developer.jpg",
    content:
      "The Diversity, Equity and Inclusion Strategic Plan is a comprehensive assessment and plan that identifies potential synergies, inventories efforts, pinpoints existing gaps and creates a framework for establishing MSU as a national leader in this area.",
    path: "/about",
  },
  {
    header: "DEI PLAN",
    image: "/images/kids-laptop.jpg",
    content:
      "The Diversity, Equity and Inclusion Strategic Plan is a comprehensive assessment and plan that identifies potential synergies, inventories efforts, pinpoints existing gaps and creates a framework for establishing MSU as a national leader in this area.",
    path: "/about",
  },
];

const WhyCascade = () => {
  return (
    <section className="w-full container mx-auto px-5 lg:px-14 xl:px-20 py-10 lg:py-20">
      <h1
        className={`${playfairDisplay.className} font-bold text-black2 text-[42px] leading-[50px] lg:text-[136px] capitalize lg:leading-[130px]`}
      >
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Why
        </span>
        <br />
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          cascade
        </span>
      </h1>
      <div className="flex md:flex-row flex-wrap lg:flex-nowrap flex-col items-center lg:items-start gap-14 my-10 lg:my-20 mx-auto lg:mx-0 w-full lg:w-[80%]">
        {whyCascade.map((item, index) => (
          <div className="flex flex-col gap-y-5 lg:gap-y-10" key={index}>
            <span className="uppercase text-base tracking-widest font-normal text-brand-blue">
              {item.header}
            </span>
            <Image
              src={item.image}
              alt="why_cascade_image"
              width={250}
              height={166}
              className="aspect-[250/166] rounded-sm"
            />
            <p className="max-w-[250px] text-black text-base font-normal leading-7">
              {item.content}
            </p>
            <Link
              href={item.path}
              className="bg-brand-blue py-[9px] px-[15px] w-fit uppercase text-white text-base tracking-widest"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCascade;
