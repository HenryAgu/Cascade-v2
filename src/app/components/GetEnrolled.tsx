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
    image: "/images/graphic-design.jpg",
    header: "Graphic design",
    content:
      "Students develop the skills to communicate powerfully through visual elements. From logo design to social media graphics, this course covers composition, color theory, typography, and industry-standard design tools. Participants complete the program with a portfolio of professional-quality designs and the ability to visually express ideas across various digital platforms.",
    path: "/contact",
  },
  {
    image: "/images/web-dev.jpg",
    header: "Web development",
    content:
      "Our Web Development course introduces students to the foundations of creating functional, responsive websites. Starting with HTML and CSS fundamentals, students progress to JavaScript interactivity and responsive design principles. By the end of the program, participants will have built their own multi-page websites that solve real community problems.",
    path: "/contact",
  },
  {
    image: "/images/video-editing.jpg",
    header: "Video editing",
    content:
      "Students develop the skills to communicate powerfully through visual elements. From logo design to social media graphics, this course covers composition, color theory, typography, and industry-standard design tools. Participants complete the program with a portfolio of professional-quality designs and the ability to visually express ideas across various digital platforms.",
    path: "/contact",
  },
  {
    image: "/images/ui-design.jpg",
    header: "UI/UX Design",
    content:
      "In this course, students learn to create digital experiences that are both beautiful and user-friendly. Combining principles of visual design with user psychology, participants discover how to create interfaces that people love to use. Projects include wireframing, prototyping, and testing real applications. This course is ideal for students who balance creativity with analytical thinking.",
    path: "/contact",
  },
  {
    image: "/images/data-analysis.jpg",
    header: "Data Analysis",
    content:
      "Our Data Analysis course empowers students to collect, clean, and interpret data to make informed decisions. Students learn to work with spreadsheets, visualization tools, and basic statistical concepts to uncover patterns and trends in information. Through hands-on projects analyzing datasets, students develop critical thinking skills and the ability to transform raw data into actionable insights.",
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
