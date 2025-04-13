import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const TopPick = () => {
  const OurVisionImage = "/images/learning.jpg";
  return (
    <section className="py-10 lg:py-20 px-0 lg:px-14 xl:px-20 font-source flex lg:flex-row flex-col">
      <Link href="" className="basis-[50%] bg-black text-white lg:px-20 lg:py-32 py-14 px-5 flex flex-col items-center justify-center  text-center gap-y-5 group">
        <h6 className="text-sm font-normal tracking-wider">TOP PICK OF THE DAY</h6>
        <h3
          className={`${playfairDisplay.className} text-3xl line-clamp-3 lg:text-[36px] font-normal group-hover:underline transition-all duration-200 ease-in-out`}
        >
          I Am Seeing My Community of Researchers Decimated
        </h3>
        <p className="line-clamp-4 text-base lg:text-lg font-normal">
          Across the country, the Trump Administration’s assault on public
          institutions and its cuts to government funding are forcing scientists
          to abandon their work and the patients who benefit from it.
        </p>
        <span className="line-clamp-4 text-base lg:text-lg font-normal">
          By Henry Agu
        </span>
      </Link>
      <div className="basis-[50%]">
        <Image
          src={OurVisionImage}
          alt="top_pick_image"
          width={680}
          height={648}
          className="w-full h-[380px] lg:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default TopPick;
