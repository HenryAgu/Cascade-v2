import Link from "next/link";
import React from "react";

const NextStep = () => {
  return (
    <div className="flex flex-col gap-y-8 py-10 px-5 lg:p-20 items-start lg:w-[80%] w-full container mx-auto">
      <h4
        className="text-black text-[32px] leading-10 lg:leading-[50px] lg:text-[44px] font-semibold"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Empowering Students, Elevating Schools
      </h4>
      <p
        className="text-black2 text-base lg:text-xl font-normal lg:max-w-[463px]"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Transform your school into a hub for innovation and digital excellence.
      </p>
      <Link
        href="/contact"
        className="text-base font-semibold py-3 px-6 rounded-sm bg-brand-blue text-white text-center md:w-fit"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        Join for Free
      </Link>
    </div>
  );
};

export default NextStep;
