import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const imageBanner = "/images/hero.jpg";
  const learnImage = "/images/learning2.jpg";
  return (
    <section className="py-14 lg:py-20 lg:mb-32 px-5 lg:px-20 bg-brand-blue2 w-full container mx-auto lg:max-h-[400px] flex lg:flex-row flex-col gap-x-10">
      <div className="basis-[50%] hidden lg:flex gap-x-3.5 relative">
        <Image
          src={learnImage}
          alt="people_learning"
          width={300}
          height={850}
          className="relative bottom-30 aspect-[300/850] h-[350px] rounded-sm object-cover"
          data-aos="fade-down"
          data-aos-duration="1000"
        />
        <Image
          src={imageBanner}
          alt="image_banner"
          width={300}
          height={850}
          className="relative top-5 aspect-[300/850] h-[350px] rounded-sm object-cover"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <div className="basis-[50%] flex flex-col gap-y-4">
        <h4 className="text-black text-[32px] leading-9 lg:text-[44px] font-semibold">
          Learner outcomes on Cascade
        </h4>
        <p className="text-black2 text-base lg:text-xl font-normal max-w-[463px]">
          77% of learners report career benefits, such as new skills, increased
          pay, and new job opportunities.
        </p>
        <Link
          href="/contact"
          className="text-base font-semibold py-3 px-6 rounded-sm bg-brand-darkblue text-white text-center md:w-fit mt-3 lg:mt-5"
        >
          Join for Free
        </Link>
      </div>
    </section>
  );
};

export default Banner;
