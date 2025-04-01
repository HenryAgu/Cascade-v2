import Link from "next/link";
import React from "react";

const ContactBanner = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-5 justify-between w-full container mx-auto px-5 lg:px-20 py-10">
      <div className="">
        <span className="font-source text-[22px] lg:text-2xl font-medium text-black">
          Contact us
        </span>
      </div>
      <div className="max-w-[718px]">
        <p className="font-source text-[22px] lg:text-2xl font-medium text-black">
          Have a question or need assistance? Reach out to CASCADE Support via
          email at
          <Link
            href="mailto:info@cascade.com?subject=Support Request&body=Hello CASCADE Support,"
            className="text-brand-blue underline"
          >
            info@cascade.com.
          </Link>
          We&apos;re here to help!
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
