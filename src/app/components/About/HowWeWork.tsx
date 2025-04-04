import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="w-full container mx-auto px-5 lg:px-32 py-14 lg:py-32 bg-brand-darkblue">
      <div className="flex flex-col gap-y-5">
        <Image
          src="/images/image.svg"
          height={40}
          width={40}
          alt="image_icon"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <span
          className="text-white font-source text-base lg:text-lg font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          What You Get With CASCADE
        </span>
        <p
          className="text-white font-source text-2xl leading-8 lg:leading-10 lg:text-[32px] font-normal"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          With Cascade, you gain access to a vast network of expert educators
          and innovative learning resources designed to bridge skill gaps and
          enhance knowledge. Our platform offers personalized learning
          experiences, seamless collaboration, and expert-curated content,
          ensuring that individuals and businesses can upskill efficiently and
          stay ahead in a rapidly evolving world.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
