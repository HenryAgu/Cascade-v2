import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface JustIn {
  image: string;
  headline: string;
  preview: string;
  path: string;
  author: string;
}

const justInBlogs: JustIn[] = [
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
    preview:
      "Across the country, the Trump Administration’s assault on public institutions and its cuts to government funding are forcing scientists to abandon their work and the patients who benefit from it.",
    author: "E. Tammy Kim",
  },
  {
    image: "/images/learning.jpg",
    headline: "“I Am Seeing My Community of Researchers Decimated”",
    path: "",
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

const DailyColumn = () => {
  return (
    <section className="py-10 lg:py-20 px-5 lg:px-20 font-source">
      <p className="text-black2 font-bold uppercase text-2xl">Daily reads</p>
      <div className="py-7 flex gap-x-5 overflow-x-auto">
        {justInBlogs.map((item, index) => (
          <Link
            href={`blog/${item.headline}`}
            className="flex flex-col gap-y-3.5 group shrink-0 max-w-full lg:max-w-[303px]"
            key={index}
          >
            <Image
              src="/images/learning.jpg"
              height={220}
              width={444}
              className="w-full h-[220px]"
              alt={`${item.headline}_image`}
            />
            <h4
              className={`${playfairDisplay.className} line-clamp-2 text-black text-[22px] transition-all duration-200 ease-in-out leading-8 font-normal group-hover:underline`}
            >
              {item.headline}
            </h4>
            <p className="line-clamp-4 text-base font-normal text-black2">
              {item.preview}
            </p>
            <span className="font-bold text-base text-black">
              By {item.author}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DailyColumn;
