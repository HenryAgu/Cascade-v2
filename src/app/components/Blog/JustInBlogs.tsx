import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

interface JustIn {
  image: string;
  headline: string;
  preview: string;
  author: string;
}

const justInBlogs: JustIn[] = [
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
];

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const JustInBlogs = () => {
  return (
    <div className="py-10 lg:py-20 px-5 lg:px-20 font-source">
      <p className="text-black2 font-bold uppercase text-2xl">New Reads</p>
      <div className="py-7 grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-10">
        {justInBlogs.slice(0, 4).map((item,index) => (
          <div className="flex flex-col gap-y-3.5" key={index}>
            <Image
              src="/images/learning.jpg"
              height={220}
              width={444}
              className="w-full h-[220px]"
              alt={`${item.headline}_image`}
            />
            <h4
              className={`${playfairDisplay.className} line-clamp-2 text-black text-[22px] leading-8 font-normal`}
            >
              {item.headline}
            </h4>
            <p className="line-clamp-4 text-base font-normal text-black2">{item.preview}</p>
            <span className="font-bold text-base text-black">By {item.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustInBlogs;
