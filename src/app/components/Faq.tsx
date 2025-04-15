"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Faqs {
  id: number;
  question: string;
  answer: string;
}

const faqs: Faqs[] = [
  {
    id: 1,
    question: "What is Cascade Africa?",
    answer: "Cascade Africa is an educational technology organization dedicated to bridging the digital skills gap among young Nigerians. We partner with primary and secondary schools to provide hands-on training in high-demand tech skills including web development, programming, UI/UX design, graphics design, video editing, and data analysis."
  },
  {
    id: 2,
    question: "What age groups do your programs serve?",
    answer: "Our programs are designed for primary and secondary school students, typically ages 8-18. We tailor our curriculum to be age-appropriate while still providing meaningful skills development."
  },
  {
    id: 3,
    question: "How are your courses structured?",
    answer: "Our courses use project-based learning approaches where students create actual digital products. Sessions include both theory and extensive hands-on practice, with students building portfolios of real work rather than just completing exercises."
  },
  {
    id: 4,
    question: "Will these programs interfere with the regular curriculum?",
    answer: "No. Our programs are designed to complement rather than compete with the existing curriculum. We often integrate our training to show how standard subjects (like mathematics or language) apply to digital skills, enhancing overall academic performance."
  },
  {
    id: 5,
    question: "Do students receive certification?",
    answer: "Yes, students receive certifications upon completion of our courses. More importantly, they graduate with portfolios of actual projects that demonstrate their abilities to future employers or university admissions officers."
  },
  {
    id: 6,
    question: "What technical resources does our school need to implement your programs?",
    answer: "We work with your existing computer facilities, though we recommend a minimum standard for optimal learning. During our initial assessment, we'll evaluate your current setup and recommend optimization strategies if needed."
  },
  {
    id: 7,
    question: "How do these skills benefit students in the long term?",
    answer: "These digital skills prepare students for the modern workforce, increase their employability, and provide pathways to high-demand careers. Many students discover career interests earlier, giving them focus for further education. The skills are transferable across industries and remain valuable regardless of their chosen field."
  },
  {
    id: 8,
    question: "Do you offer competitive opportunities for students?",
    answer: "Yes! We organize competitions and showcase events where students can demonstrate their skills and projects. These events help students build confidence, enhance their portfolios, and gain recognition for their accomplishments."
  }
];

const SingleFaq: React.FC<Faqs & { openFaqId: number | null; setOpenFaqId: (id: number | null) => void }> = ({ id, question, answer, openFaqId, setOpenFaqId }) => {
  const isOpen = openFaqId === id;

  return (
    <button
      className="bg-brand-lightblue p-5 rounded-xl w-full cursor-pointer text-left transition-all duration-300"
      onClick={() => setOpenFaqId(isOpen ? null : id)}
    >
      <div className="flex items-center justify-between">
        <p className="text-base leading-5 lg:text-xl lg:leading-7 font-source text-white2 font-medium basis-[80%]">
          {question}
        </p>
        <IoIosArrowDown
          className={`text-white2 text-xl font-bold transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
      >
        <p className="text-white2 text-sm lg:text-base">{answer}</p>
      </div>
    </button>
  );
};

const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(faqs[0].id);

  return (
    <section className="my-10 lg:my-20 lg:mb-32 flex flex-col justify-center w-full container mx-auto px-5 lg:px-20">
      <span className="text-center text-[30px] lg:text-[40px] font-source font-semibold leading-10 lg:leading-13">
        Frequently <br />
        Asked Questions
      </span>
      <div className="w-full lg:w-[60%] md:w-[90%] mx-auto my-10 flex flex-col gap-y-5">
        {faqs.map((item) => (
          <SingleFaq key={item.id} {...item} openFaqId={openFaqId} setOpenFaqId={setOpenFaqId} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
