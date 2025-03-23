import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center gap-10 py-5 lg:py-10 font-source w-full">
      <div className="basis-full lg:basis-[50%] flex flex-col lg:text-left text-center gap-y-5 w-full">
        <h1 className="text-5xl text-black font-medium leading-[60px] hidden lg:block">
          Empowering Tomorrow&lsquo;s <br /> Innovators
        </h1>
        <h1 className="text-[32px] leading-10 text-black font-medium block lg:hidden">
        Empowering Tomorrow&lsquo;s Innovators 
        </h1>
        <p className="text-base text-black max-w-full lg:max-w-[500px] font-normal">
          Welcome to our innovative platform, where we are dedicated to
          empowering tomorrow &lsquo;s innovators through early tech education for
          young minds.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-5 w-full lg:mt-5">
          <Link href="" className="text-base font-source font-medium border-[1.5px] border-brand-blue py-3 px-6 rounded-sm text-white bg-brand-blue">Get your school involved</Link>
          <Link href="" className="text-base font-source font-medium border-[1.5px] border-brand-blue text-brand-blue bg-white py-3 px-6 rounded-sm">Learn more about cascade</Link>
        </div>
      </div>
      <div className="basis-full lg:basis-[50%]">
        <Image
          src="/images/hero.jpg"
          alt="hero_image"
          height={489}
          width={704}
          className="w-full h-[220px] lg:w-[704px] lg:h-[489px] custom-border-radius hidden lg:block"
        />
                <Image
          src="/images/hero.jpg"
          alt="hero_image"
          height={220}
          width={704}
          className="w-full h-[300px] object-contain rounded-sm block lg:hidden"
        />
      </div>
    </section>
  );
};

export default HomeHero;
