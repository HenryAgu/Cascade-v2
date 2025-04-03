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
    reset,
  } = useForm<FormFields>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        reset();
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      className="flex flex-col gap-y-1.5 lg:gap-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        {...register("name", {
          required: "Name is required!",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
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
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" },
        })}
        placeholder="Your email here"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent text-lg lg:text-2xl font-medium"
      />
      {errors.email && (
        <span className="text-red-600 mb-5">{errors.email.message}</span>
      )}

      <textarea
        {...register("message", {
          required: "Message is required!",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })}
        placeholder="Message"
        className="font-source border-b py-1.5 lg:py-3.5 border-black text-black outline-transparent text-lg lg:text-2xl font-medium resize-none h-[180px] lg:h-[35vh]"
      />
      {errors.message && (
        <span className="text-red-600 mb-5">{errors.message.message}</span>
      )}

      {/* Success/Error Messages */}
      {successMessage && (
        <p className="text-green-600 mt-2">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}

      <button
        disabled={isSubmitting}
        className="border flex items-center justify-between border-black2 text-left py-[14px] lg:py-[18px] px-5 max-w-full lg:max-w-[322px] rounded-full text-lg lg:text-[22px] font-source mt-5 lg:mt-10 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <span className="flex items-center justify-between w-full gap-x-2">
            Let&apos;s talk
            <MdArrowOutward className="text-2xl lg:text-3xl font-light" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
