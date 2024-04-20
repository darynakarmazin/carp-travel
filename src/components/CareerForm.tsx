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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full name
        <input {...register("fullName")} placeholder="Full Name" />
      </label>
      <label>
        E-mail
        <input {...register("email")} placeholder="E-mail" />
      </label>
      <label>
        Position
        <input {...register("position")} placeholder="Position" />
      </label>
      <label>
        Phone
        <input {...register("phone")} placeholder="Phone" />
      </label>
      <label>
        Message
        <textarea {...register("message")} placeholder="Message" />
      </label>
      <input {...register("agreement")} type="checkbox" />
      <input type="submit" value="SEND" />
    </form>
  );
}

export default CareerForm;
