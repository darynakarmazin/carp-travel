"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const [formData, setFormData] = useState<Inputs>({
    fullName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    toast.success(`${data.fullName}, заявку успішно відтправлено!`);
    reset();
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form
        className="flex flex-col gap-4 md:flex-row md:gap-5 xl:flex-col xl:w-1/2 xl:px-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 md:w-1/2 xl:flex-row xl:w-full">
          <label className="relative flex flex-col gap-1 text-[12px] leading-6 xl:flex-grow">
            Full name
            <input
              className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 xl:py-[2px] outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Incorrect name",
                },
                maxLength: {
                  value: 20,
                  message: "Incorrect name",
                },
              })}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
                {`× ${errors.fullName?.message}`}
              </p>
            )}
          </label>
          <label className="relative flex flex-col gap-1 text-[12px] leading-6 xl:flex-grow">
            E-mail
            <input
              className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 xl:py-[2px] outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Incorrect email",
                },
              })}
              value={formData.email}
              onChange={handleChange}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
                {`× ${errors.email?.message}`}
              </p>
            )}
          </label>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 xl:w-full">
          <label className="relative flex flex-col gap-1 text-[12px] leading-6">
            Message
            <textarea
              className="h-48 md:h-[228px] xl:h-[268px] text-[13px] xl:text-[20px] leading-6 font-extralight px-2 xl:py-[2px] outline-none bg-white bg-opacity-5 text-white resize-none"
              {...register("message", {
                required: "Message is required",
              })}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
                {`× ${errors.message?.message}`}
              </p>
            )}
          </label>
          <input className="ml-auto text-3xl" type="submit" value="SEND" />
        </div>
      </form>
    </>
  );
}

export default ContactsForm;
