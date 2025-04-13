"use client"
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchBlog } from "../../../sanity/lib/fetchBlog";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

const JustInBlogs = () => {
  const {
		data: blogs,
		isLoading,
		error,
	} = useQuery({ queryKey: ["blogs"], queryFn: fetchBlog });

	if (isLoading) return <p>Loading...</p>
	if (error) return <div> An error occured </div>;
  return (
    <div className="py-10 lg:py-20 px-5 lg:px-14 xl:px-20 font-source">
      <p className="text-black2 font-bold uppercase text-2xl">New Reads</p>
      <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {blogs?.slice(0, 4).map((item, index) => (
          <Link
            href={`/blog/${item?.slug?.current}`}
            className="flex flex-col gap-y-3.5 group"
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
    </div>
  );
};

export default JustInBlogs;
