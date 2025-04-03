import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonial: Testimonial[] = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    company: "Google",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae deserunt adipisci dicta aperiam ex! Amet, officiis animi? Suscipit voluptas rem odit deleniti quis nihil quibusdam quisquam exercitationem labore eos.",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    company: "Google",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae deserunt adipisci dicta aperiam ex! Amet, officiis animi? Suscipit voluptas rem odit deleniti quis nihil quibusdam quisquam exercitationem labore eos.",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    company: "Google",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae deserunt adipisci dicta aperiam ex! Amet, officiis animi? Suscipit voluptas rem odit deleniti quis nihil quibusdam quisquam exercitationem labore eos.",
  },
];

const Testimonial = () => {
  return (
    <section className="container mx-auto w-full flex flex-col flex-wrap items-center py-10 px-5 justify-center">
      <div className="text-center flex flex-col gap-y-1.5 max-w-[750px]">
        <h3 className="text-2xl lg:text-[44px] font-semibold text-black">
          Cascade Comunity
        </h3>
        <p className="text-sm lg:text-[28px] font-normal text-black">
          ALX is a catalyst for positive change in Africa. With numerous schools
          as its partners.
        </p>
      </div>
      <div className="mt-5 lg:mt-10 md:mx-36 lg:mx-0 flex lg:flex-row flex-col gap-y-5 gap-x-2.5">
        {testimonial.map((item, index) => (
          <div
            className="border p-5 rounded-sm border-cascade-gray-150 shrink-0"
            key={index}
          >
            <div className="max-w-full lg:max-w-[300px] flex flex-col gap-y-3.5">
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg lg:text-xl font-semibold text-[#010928]">
                  {item.name}
                </h3>
                <div className="flex items-center gap-x-1 text-sm lg:text-base font-normal text-black">
                  <span>{item.company}</span>
                  <span>|</span>
                  <span>{item.role}</span>
                </div>
              </div>
              <p className="text-sm lg:text-base font-normal text-black2 pb-5">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
