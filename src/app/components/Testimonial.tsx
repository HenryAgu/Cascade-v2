import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonial: Testimonial[] = [
  {
    name: "Chibudom N",
    role: "",
    company: "Student",
    content:
      "Before Cascade Africa came to our school, I only used computers for games and social media. Now I'm designing websites that solve real problems in my community. Last month, I built a platform that helps local businesses showcase their products online. My parents couldn't believe I created it myself!",
  },
  {
    name: "Mrs. Okafor",
    role: "",
    company: "Teacher",
    content:
      "Integrating Cascade Africa into our curriculum transformed not just my computer class, but our entire school culture. Students who were previously disengaged are now our most enthusiastic learners. They're applying computational thinking across subjects, and I've seen remarkable improvement in logical reasoning and creative problem-solving. ",
  },
  {
    name: "Mr. Nwachukwu",
    role: "",
    company: "School Principal",
    content:
      "Partnering with Cascade Africa was the best decision we made this academic year. Our enrollment has increased by 15% as parents specifically seek out our school for its digital skills program. More importantly, discipline issues have decreased as students channel their energy into creative tech projects. The return on investment has been extraordinary, both academically and financially.",
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
          Cascade Africa is a catalyst for positive change in Africa. With numerous schools
          as its partners.
        </p>
      </div>
      <div className="mt-5 lg:mt-10 md:mx-36 lg:mx-10 flex lg:flex-wrap lg:flex-row flex-col gap-y-5 gap-x-2.5">
        {testimonial.map((item, index) => (
          <div
            className="border p-5 rounded-sm border-cascade-gray-150 shrink-0"
            key={index}
          >
            <div className="max-w-full lg:max-w-[300px] flex flex-col gap-y-3.5">
              <div className="flex gap-x-2">
                <h3 className="text-lg lg:text-xl font-semibold text-[#010928]">
                  {item.name}
                </h3>
                <div className="flex items-center gap-x-1 text-sm lg:text-base font-normal text-black">
                  <span>|</span>
                  <span>{item.company}</span>
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
