"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

function ContactsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(`${data.fullName}, заявку успішно відтправлено!`);

  return (
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
  );
}

export default ContactsForm;
