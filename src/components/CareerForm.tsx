"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  agreement: boolean;
};

function CareerForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      agreement: false,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch());

  return (
    <form
      className="flex flex-col gap-4 md:flex-row md:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 md:w-1/2">
        <label className="relative flex flex-col gap-1 text-[12px] leading-6">
          Full name
          <input
            className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
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
              {`x ${errors.fullName?.message}`}
            </p>
          )}
        </label>
        <label className="relative flex flex-col gap-1 text-[12px] leading-6">
          E-mail
          <input
            className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
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
              {`x ${errors.email?.message}`}
            </p>
          )}
        </label>
        <label className="relative flex flex-col gap-1 text-[12px] leading-6">
          Position
          <input
            className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
            {...register("position", {
              required: "Position is required",
            })}
            placeholder="Movie maker"
          />
          {errors.position && (
            <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
              {`x ${errors.position?.message}`}
            </p>
          )}
        </label>
        <label className="relative flex flex-col gap-1 text-[12px] leading-6">
          Phone
          <input
            className="text-[13px] xl:text-[20px] leading-6 font-extralight px-2 outline-none bg-white bg-opacity-5 text-white placeholder:opacity-50"
            {...register("phone", {
              required: "Phone is required",
            })}
            placeholder="+ 38 (097) 12 34 567"
          />
          {errors.phone && (
            <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
              {`x ${errors.phone?.message}`}
            </p>
          )}
        </label>

        <label className="max-md:hidden relative text-[12px] leading-6">
          <input
            className="custom-checkbox mr-2 text-[12px] leading-[22px]"
            {...register("agreement", { required: true })}
            type="checkbox"
          />
          <p>I confirm my consent to the processing of personal data.</p>
          {errors.agreement && (
            <p className="max-md:hidden absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.1em] text-red-500 font-extralight">
              You must agree to the terms
            </p>
          )}
        </label>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2 text-[12px] leading-6">
        <label className="relative flex flex-col gap-1">
          Message
          <textarea
            className="h-48 md:h-[228px] xl:h-[268px] text-[13px] xl:text-[20px] leading-6 font-extralight px-2 outline-none bg-white bg-opacity-5 text-white"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className="absolute bottom-[-24px] right-0 text-[12px] leading-6 tracking-[0.15em] text-red-500 font-extralight">
              {`x ${errors.message?.message}`}
            </p>
          )}
        </label>
        <label className="relative md:hidden text-[12px] leading-[22px] xl:leading-6">
          <input
            className="custom-checkbox mr-2"
            {...register("agreement", { required: true })}
            type="checkbox"
          />
          <p>I confirm my consent to the processing of personal data.</p>
          {errors.agreement && (
            <p className="md:hidden absolute bottom-[-24px] right-0 text-right text-[12px] leading-6 tracking-[0.1em] text-red-500 font-extralight">
              You must agree to the terms
            </p>
          )}
        </label>

        <input className="ml-auto text-3xl" type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default CareerForm;
