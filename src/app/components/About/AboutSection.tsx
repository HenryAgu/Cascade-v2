import React from "react";

interface CoreValues {
  header: string;
  content: string;
}

const coreValues: CoreValues[] = [
  {
    header: "Innovation",
    content:
      "We embrace creativity and forward-thinking solutions to drive meaningful change.",
  },
  {
    header: "Excellence",
    content:
      "We are committed to delivering high-quality, impactful services that exceed expectations.",
  },
  {
    header: "Inclusivity",
    content:
      "We believe that opportunity should be accessible to all, regardless of background or experience.",
  },
  {
    header: "Integrity",
    content:
      "We operate with transparency, trust, and a deep commitment to ethical practices.",
  },
  {
    header: "Growth",
    content:
      "We thrive on continuous learning, adaptability, and helping others scale new heights.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-5 lg:py-20 lg:pb-32 w-full container mx-auto px-5 lg:px-20">
      <div className="flex flex-col gap-y-12 lg:gap-y-24">
        <div className="flex flex-col gap-y-3.5 items-end justify-center">
          <h3 className="text-2xl lg:text-3xl  font-source font-medium text-black">
            Who We Are
          </h3>
          <p className="max-w-[520px] font-source text-base lg:text-lg text-black2 font-normal">
            Cascade was founded with a simple yet powerful idea: to create a
            world where growth, success, and access to opportunities are within
            reach for everyone. We are more than just a company—we are a
            community of visionaries, problem-solvers, and change-makers
            committed to driving progress in everything we do.
          </p>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <h3 className="text-2xl lg:text-3xl  font-source font-medium text-black">
            What We Do
          </h3>
          <p className="max-w-[520px] font-source text-base lg:text-lg text-black2 font-normal">
            We specialize in cutting-edge technology solutions Through
            innovation, dedication, and customer-centric solutions, we help
            individuals and businesses unlock their full potential. Our services
            are designed to be intuitive, efficient, and future-focused,
            ensuring that you stay ahead in a rapidly evolving world.
          </p>
        </div>
        <div className="flex flex-col gap-y-3.5 items-end justify-center">
          <h3 className="text-2xl lg:text-3xl  font-source font-medium text-black">
            Our Core Values
          </h3>
          <span className=" font-source text-base lg:text-xl text-black2 font-normal">
            At Cascade, we are guided by:
          </span>
          <ul className="flex flex-col gap-y-2 list-disc">
            {coreValues.map((item, index) => (
              <li
                className="max-w-[520px] font-source text-base xl:text-lg text-black2 font-normal"
                key={index}
              >
                {`${item.header}: ${item.content}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
