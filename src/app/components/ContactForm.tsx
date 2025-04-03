"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <form
      action=""
      className="flex flex-col gap-y-1.5 lg:gap-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        id=""
        {...register("name", {
          required: "Name is required!",
          minLength: 3,
        })}
        placeholder="Your name here"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent text-lg lg:text-2xl font-medium"
      />
      {errors.name && (
        <span className="text-red-600 mb-5">{errors.name.message}</span>
      )}
      <input
        type="email"
        {...register("email", {
          required: "Email is required!",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
        })}
        id=""
        placeholder="Your email here"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent text-lg lg:text-2xl font-medium"
      />
      {errors.email && (
        <span className="text-red-600 mb-5">{errors.email.message}</span>
      )}
      <textarea
        id=""
        {...register("message", {
          required: "Message is required!",
          minLength: 10,
        })}
        placeholder="Message"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent text-lg lg:text-2xl font-medium resize-none h-[180px] lg:h-[35vh]"
      />
      {errors.message && (
        <span className="text-red-600 mb-5">{errors.message.message}</span>
      )}
      <button
        disabled={isSubmitting}
        className="border flex items-center justify-between border-black2 text-left py-[14px] lg:py-[18px] px-5 max-w-full lg:max-w-[322px] rounded-full text-lg lg:text-[22px] font-source mt-5 lg:mt-10 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <span className="flex items-center justify-between w-full gap-x-2">
            Let's talk
            <MdArrowOutward className="text-2xl lg:text-3xl font-light" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
