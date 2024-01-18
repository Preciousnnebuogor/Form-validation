"use client";
import style from "./second.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/app/validation/Uservalid";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SecondForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log(errors.email?.message, "error message");
    if (
      errors.country?.message ||
      errors.state?.message ||
      errors.city?.message ||
      errors.LGA?.message
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
        <h1>Second Stage</h1>
        <input
          type="country"
          required
          placeholder="Country"
          {...register("country")}
        />
        <p style={{ color: "red" }}>{errors.country?.message}</p>
        <input type="state" placeholder="State" {...register("state")} />
        <p style={{ color: "red" }}>{errors.state?.message}</p>
        <input type="LGA" placeholder="LGA" {...register("LGA")} />
        <p style={{ color: "red" }}>{errors.LGA?.message}</p>
        <input type="city" placeholder="City" {...register("city")} />
        <p style={{ color: "red" }}>{errors.city?.message}</p>
        <button type="submit" className={style.submit}>
          Next
        </button>
      </form>
    </div>
  );
}
