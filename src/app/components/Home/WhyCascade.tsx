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
    header: "BEYOUND TEST SCORES",
    image: "/images/robotics.jpg",
    content:
      "In a rapidly changing world, traditional education alone isn't enough. Our program complements academic subjects by showing how classroom concepts apply to real-world technology. When students see these connections, engagement rises across all subjects. This isn't an extra burden—it's education made relevant.",
    path: "/about",
  },
  {
    header: "BEYOUND STUDENTS BENEFIT",
    image: "/images/computer-lab.jpg",
    content:
      "Partner schools become known as forward-thinking institutions that prepare students for the actual economy they'll enter. Your computer labs transform from typing centers to innovation hubs. Parents see immediate results in their children's capabilities and engagement. Most importantly, your school contributes directly to building innovators.",
    path: "/about",
  },
  {
    header: "WATCH THEM TRANSFORM",
    image: "/images/video-editing-kids.jpg",
    content:
      "From digital consumers to digital creators, our students don't just learn about technology—they harness it to express their creativity and address challenges in their communities. Each student graduates with a portfolio of actual projects, not just certificates. This is the future of education: students who can build, create, and innovate.",
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
