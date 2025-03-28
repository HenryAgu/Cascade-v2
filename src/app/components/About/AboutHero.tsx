import Image from "next/image";
import React from "react";

const AboutHero = () => {
  const heroImage = "/images/hero.jpg";
  return (
    <section className="pb-5 lg:pb-24 w-full container mx-auto px-5 lg:px-20 flex gap-x-5">
      <div className="basis-[50%] flex items-end px-10 py-20">
        <p className="font-source text-[32px] font-bold leading-10 text-black2 max-w-[513px]">
          We believe that everyone should
          have the chance to unlock their full potential and access endless
          opportunities.
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
