"use client"
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchBlog } from "../../../sanity/lib/fetchBlog";
import { Spinner } from "../Spinner";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const DailyColumn = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlog });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-fit">
        <Spinner size={30} />
      </div>
    );
  if (error) return <div> An error occured </div>;
  return (
    <section className="py-10 lg:py-20 px-5 lg:px-20 font-source">
      <p className="text-black2 font-bold uppercase text-2xl">Daily reads</p>
      <div className="py-7 flex gap-x-5 overflow-x-auto">
        {blogs?.slice(0, 4).map((item, index) => (
          <Link
            href={`/blog/${item?.slug?.current}`}
            className="flex flex-col gap-y-3.5 group shrink-0 max-w-full lg:max-w-[303px]"
            key={index}
          >
            <Image
              src={item?.mainImage?.asset?.url}
              height={220}
              width={444}
              className="w-full h-[220px]"
              alt={`${item?.title}_image`}
            />
            <h4
              className={`${playfairDisplay.className} line-clamp-2 text-black text-[22px] transition-all duration-200 ease-in-out leading-8 font-normal group-hover:underline`}
            >
              {item?.title}
            </h4>
            <p className="line-clamp-4 text-base font-normal text-black2">
              {item?.introduction}
            </p>
            <span className="font-bold text-base text-black">
              By {item?.author?.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DailyColumn;
