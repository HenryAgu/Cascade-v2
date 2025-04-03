import Image from "next/image";
import React from "react";

interface ProblemSolved {
  title: string;
  description: string;
}

const problemsSolved: ProblemSolved[] = [
  {
    title: "Bridge the skills gap in education",
    description:
      "We provide innovative tech education to equip students with essential 21st-century skills. Our curriculum ensures learners gain hands-on experience in coding, AI, and digital literacy.",
  },
  {
    title: "Empower educators with digital tools",
    description:
      "Our platform offers teachers the latest EdTech resources, making it easier to create engaging, interactive learning experiences that cater to different learning styles.",
  },
  {
    title: "Prepare students for future careers",
    description:
      "We align education with industry needs, ensuring students are career-ready by integrating real-world problem-solving and critical thinking into their learning journey.",
  },
];

const AboutSection = () => {
  const HeroImage = "/images/hero.jpg";
  return (
    <section className="w-full container mx-auto px-5 lg:px-20 py-8 lg:py-20 flex flex-col justify-end h-full">

        <p className="flex items-start justify-start text-2xl lg:text-[32px] font-source font-light">
          Problems we’ll help you solve
        </p>
      <div className="flex flex-col lg:items-end w-full">
        <div className="grid lg:grid-cols-3 gap-y-10 gap-x-20 my-10 lg:my-20">
          {problemsSolved.map((item, index) => (
            <div
              className="flex flex-col gap-y-1.5 lg:gap-y-5 max-w-[340px] text-black2"
              key={index}
            >
              <span className="text-brand-blue text-base lg:text-lg font-source font-semibold tracking-tighter">{`0 ${
                index + 1
              }`}</span>
              <h3 className="text-base lg:text-lg text-black font-semibold font-source">
                {item.title}
              </h3>
              <p className="font-source text-sm lg:text-base text-black2 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-10 gap-x-14 w-full lg:max-w-[85%] my-7 lg:my-14">
          <div className="basis-full lg:basis-[30%] flex flex-col gap-y-1.5 lg:gap-y-5 font-source">
            <span className="text-2xl lg:text-[32px] font-light text-black">Our Vision</span>
            <p className="font-normal text-base text-black2">
              At Cascade, we envision a future where every child
              has access to quality tech education, empowering them with the
              skills to innovate, create, and lead in the digital age. We strive
              to bridge the gap between traditional education and the evolving
              tech landscape, ensuring that young minds are equipped to solve
              real-world challenges and shape the future with confidence.
            </p>
          </div>
          <div className="basis-full lg:basis-[70%] w-full">
            <Image
              src={HeroImage}
              alt="our_vision_image"
              width={779}
              height={380}
              className="w-full h-[164px] lg:h-[380px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
