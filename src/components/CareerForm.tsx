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
        <label className="flex flex-col gap-1">
          Full name
          <input
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
          {errors.fullName && <p>{errors.fullName?.message}</p>}
        </label>
        <label className="flex flex-col gap-1">
          E-mail
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Incorrect email",
              },
            })}
            placeholder="johnsmith@email.com"
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </label>
        <label className="flex flex-col gap-1">
          Position
          <input
            {...register("position", {
              required: "Position is required",
            })}
            placeholder="Movie maker"
          />
          {errors.position && <p>{errors.position?.message}</p>}
        </label>
        <label className="flex flex-col gap-1">
          Phone
          <input
            {...register("phone", {
              required: "Phone is required",
            })}
            placeholder="+ 38 (097) 12 34 567"
          />
          {errors.phone && <p>{errors.phone?.message}</p>}
        </label>
        <label className="max-md:hidden">
          <input
            className="mr-2"
            {...register("agreement", { required: true })}
            type="checkbox"
          />
          I confirm my consent to the processing of personal data.
        </label>
        {errors.agreement && (
          <p className="max-md:hidden">
            You must agree to the terms and conditions
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <label className="flex flex-col gap-1">
          Message
          <textarea
            className="h-48 md:h-[228px] xl:h-[268px]"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && <p>{errors.message?.message}</p>}
        </label>
        <label className="md:hidden">
          <input
            className="mr-2"
            {...register("agreement", { required: true })}
            type="checkbox"
          />
          I confirm my consent to the processing of personal data.
        </label>
        {errors.agreement && (
          <p className="md:hidden">
            You must agree to the terms and conditions
          </p>
        )}
        <input className="ml-auto" type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default CareerForm;
