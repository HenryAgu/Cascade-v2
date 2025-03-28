import Image from "next/image";
import React from "react";

const AboutHero = () => {
  const heroImage = "/images/hero.jpg";
  return (
    <section className="pb-5 lg:pb-24 w-full container mx-auto px-5 lg:px-20 flex gap-x-10">
      <div className="basis-[50%] flex items-end px-10 py-20">
        <p className="font-source text-3xl font-bold leading-10 text-black2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Possimus, sed cumque corporis doloribus <br />
          alias rem blanditiis pariatur quia.
        </p>
      </div>
      <div className="basis-[50%]">
        <Image
          src={heroImage}
          alt="hero_image"
          aria-label="hero_image"
          width={816}
          height={740}
          className="w-full h-[90vh] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutHero;
