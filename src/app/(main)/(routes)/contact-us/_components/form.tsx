"use client";

import AnimatedButton from "@/components/AnimatedButton";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyUrl: "",
    companyLocation: "",
    message: "",
    agreeToPromotions: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData:any) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function sendemail(){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_lq5xvnq",
        template_id: "template_j3jo7kv",
        user_id: "baxkhSrEMk-qlKLL7",
        template_params: {
          username: formData.username,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          companyName: formData.companyName,
          companyUrl: formData.companyUrl,
          companyLocation: formData.companyLocation,
          message:
            formData.message
        },
      }),
    };
    fetch("https://api.emailjs.com/api/v1.0/email/send", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
 }

  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    // sendemail();
setFormData(
  {
    username: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyUrl: "",
    companyLocation: "",
    message: "",
    agreeToPromotions: false,
  }
)
  };

  return (
    <div className="xl:w-[90%] 4xl:w-[80%] mx-auto mt-[30px] sm:mt-16  2xl:mt-20  ">
      <form
      onSubmit={handleSubmit}
        id="form"
        className="flex flex-col flex-wrap gap-y-16"
      >
        <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Full Name *"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Your Email Address *"
            required
          />
        </div>

        <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Your Phone / Contact Number *"
            required
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Your Company / Organization’s Name"
            required
          />
        </div>

        <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
          <input
            type="text"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Your Company / Store URL"
            required
          />
          <input
            type="text"
            name="companyLocation"
            value={formData.companyLocation}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="Company Location"
            required
          />
        </div>

        <div className="flex">
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5 3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]"
            placeholder="How can we help ? *"
            required
          />
        </div>

        <div className="flex items-center gap-x-2.5 md:gap-x-5">
          <input
            className="3xl:w-[46px] 3xl:h-[46px] h-[26px] w-[26px] rounded-[10px]  "
            type="checkbox"
            name=""
            id=""
          />
          <p className="text-[#525252] font-medium italic 3xl:text-[30px] sm:text-lg text-[12px] xl:text-[22px] ">
            I agree to receive promotional and marketing emails from CodeBiosis
            about their products and solutions.
          </p>
        </div>
    
      <div className="mt-14 lg:mt-0 ">
        <AnimatedButton   className="w-fit mx-auto text-lg lg:text-xl 3xl:text-[28px] font-bold text-[#2B2B2B] ">
          Send Message
        </AnimatedButton>
      </div>  </form>
    </div>
  );
};

export default Form;
