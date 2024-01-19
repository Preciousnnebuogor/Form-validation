"use client";
import style from "./third.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { toast } from "react-toastify";
import { thirdValidationSchema } from "./thirdValidation";


export default function ThirdForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(thirdValidationSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log(errors.email?.message, "error message");
    if (
      errors.email?.message ||
      errors.phone?.message ||
      errors.address?.message ||
      errors.Socialmedia?.message
    ) {
      toast.error("Fill all empty fields");
      return;
    }
    setIsSubmit(true);
    setTimeout(() => {
      console.log({ data });
      toast.success("successful registration");

      reset();
      
    });
  };

  return (
    <div className={style.App}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={style.form}>
        <h1>Third Stage</h1>
        <input type="email" placeholder="Email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input type="phone" placeholder="Phone" {...register("phone")} />
        <p style={{ color: "red" }}>{errors.phone?.message}</p>
        <input type="address" placeholder="Address" {...register("address")} />
        <p style={{ color: "red" }}>{errors.address?.message}</p>
        <input
          type="text"
          placeholder="Socialmedia Link"
          {...register("Socialmedia")}
        />
        <p style={{ color: "red" }}>{errors.Socialmedia?.message}</p>
        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
