"use client"
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
    question: "What makes Cascade stand out?",
    answer:
      "Our platform stands out due to its focus on innovation, adaptability, and inclusivity. We integrate cutting-edge technology to personalize learning experiences, ensuring that every individual can thrive regardless of their background or learning style.",
  },
  {
    id: 2,
    question:
      "How do you ensure the quality of the educational content on your platform?",
    answer:
      "We have a rigorous vetting process for educational content, working closely with experts in various fields to curate materials that are accurate, up-to-date, and engaging. Additionally, we continuously gather feedback from users to improve and refine our content offerings.",
  },
  {
    id: 3,
    question: "How does your platform foster collaboration among learners?",
    answer:
      "Collaboration is at the heart of our platform. We offer various features such as discussion forums, group projects, and virtual study sessions to encourage interaction and collaboration among learners. Through these collaborative activities, students can learn from each other, exchange ideas, and deepen their understanding of the subject matter.",
  },
  {
    id: 4,
    question:
      "How do you measure the effectiveness and impact of your educational solutions?",
    answer:
      "We employ a variety of metrics and assessment tools to measure the effectiveness and impact of our educational solutions, including learner performance data, feedback surveys, and qualitative assessments, allowing us to continuously improve and refine our offerings.",
  },
  {
    id: 5,
    question:
      "What kind of technology and tools do you use to enhance the learning experience?",
    answer:
      "We leverage a range of technologies and tools, including AI-driven adaptive learning algorithms, and interactive multimedia resources, to enhance the learning experience and engage learners effectively.",
  },
  {
    id: 6,
    question:
      "Can your platform accommodate learners of all ages and educational backgrounds?",
    answer:
      "Yes, our platform is designed to cater to learners of all ages and educational backgrounds, from higher primary students to lifelong learners seeking professional development opportunities.",
  },
];

const SingleFaq: React.FC<Faqs> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="bg-brand-lightblue p-5 rounded-xl w-full cursor-pointer text-left transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <p className="text-base lg:text-xl font-source text-black2 font-semibold basis-[80%]">
          {question}
        </p>
        <IoIosArrowDown
          className={`text-black2 text-xl font-bold transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-black2 text-sm lg:text-base">{answer}</p>
      </div>
    </button>
  );
};

const Faq = () => {
  return (
    <section className="my-10 lg:my-20 mb-32 flex flex-col justify-center w-full container mx-auto px-5 lg:px-20">
      <span className="text-center text-[30px] lg:text-[40px] font-source font-semibold leading-10 lg:leading-13">
        Frequently <br />
        Asked Questions
      </span>
      <div className="w-full lg:w-[50%] mx-auto my-10 flex flex-col gap-y-5">
        {faqs.map((item) => (
          <SingleFaq key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
