"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello ${name}`)
  };
  return (
    <form
      action=""
      className="flex flex-col gap-y-1.5 lg:gap-y-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="text"
        id=""
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder="Your name here"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium"
      />
      <input
        type="email"
        name="email"
        id=""
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Your email here"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium"
      />
      <textarea
        name="message"
        id=""
        placeholder="Message"
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent mb-5 text-lg lg:text-2xl font-medium resize-none h-[180px] lg:h-[35vh]"
      />
      <button className="border flex items-center justify-between border-black2 text-left py-[14px] lg:py-[18px] px-5 max-w-full lg:max-w-[322px] rounded-full text-lg lg:text-[22px] font-source mt-5 lg:mt-10 cursor-pointer">
        <span>Let&apos;s talk</span>
        <MdArrowOutward className="text-2xl lg:text-3xl font-light" />
      </button>
    </form>
  );
};

export default ContactForm;
