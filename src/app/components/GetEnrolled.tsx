"use client";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  preload: true,
  subsets: ["cyrillic", "latin"],
});

interface Courses {
  image: string;
  header: string;
  content: string;
  path: string;
}

const courses: Courses[] = [
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
  {
    image: "/images/hero.jpg",
    header: "Graphic design",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi quas fugiat tenetur voluptas quam beatae, laudantium sunt necessitatibus magni, recusandae maiores a sequi amet ut quae quo. Eius, eveniet?",
    path: "",
  },
];

const GetEnrolled = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full container mx-auto pb-14 lg:pb-32">
      <div className="flex items-end lg:justify-end px-5 lg:px-20">
        <span
          className={`${playfairDisplay.className} font-bold text-black2 text-[32px] leading-[40px] lg:text-[90px] lg:leading-[110px]`}
        >
          Get enrolled in <br /> the courses made by <br /> industry experts!
        </span>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-x-5 pl-5 lg:pl-20 py-10 lg:py-20 overflow-x-auto enroll cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {courses.map((item, index) => (
          <div
            className="flex flex-col gap-y-5 shrink-0 border-cascade-gray-150 px-3.5 py-5 border rounded-xl max-w-[307px] lg:max-w-[405px] xl:max-w-[350px]"
            key={index}
          >
            <Image
              src={item.image}
              alt="course_image"
              width={400}
              height={300}
              className="w-full h-[200px] lg:h-[250px] object-cover rounded-md"
            />
            <h4 className="uppercase px-2.5 font-semibold text-base lg:text-lg text-black">
              {item.header}
            </h4>
            <p className="px-2.5 hidden lg:block text-base font-normal text-black2">
              {item.content}
            </p>
            <Link
              href={item.path}
              className="mx-2.5 bg-brand-blue border border-brand-blue py-[9px] px-[15px] w-fit text-sm lg:text-base text-white rounded-sm transition-all duration-200 ease-in-out hover:bg-white hover:text-black2 hover:border-black2"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetEnrolled;
