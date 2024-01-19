"use client";
import * as yup from "yup";
import style from "./ProductCard.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useFormStore } from "@/app/zustand/Form";
import { firstValidationSchema } from "./firstValidation";

export default function First() {
  const [isSubmit, setIsSubmit] = useState(false);
  const z = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(firstValidationSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log(errors.email?.message, "error message");
    if (
      errors.email?.message ||
      errors.firstName?.message ||
      errors.lastName?.message ||
      errors.date?.message ||
      errors.password?.message ||
      errors.confirmPassword
    ) {
      toast.error("Fill all empty fields");
      return;
    }
    setIsSubmit(true);
    setTimeout(() => {
      console.log({ data });
      toast.success("successful registration");

      reset();
      z.updateStep("step2");
    });
  };

  return (
    <>
      <div className={style.App}>
        <form onSubmit={handleSubmit(onSubmitHandler)} className={style.form}>
          <h1>Account Login</h1>
          <input
            type="text"
            required
            placeholder="First Name.."
            {...register("firstName")}
          />
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>
          <input
            type="text"
            required
            placeholder="Last Name.."
            {...register("lastName")}
          />
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          <input
            type="date"
            required
            placeholder="DOB.."
            {...register("date")}
          />
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          <input
            type="text"
            required
            placeholder="felix@gmail.com"
            {...register("email")}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <input
            type="text"
            required
            placeholder="Password"
            {...register("password")}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <input
            type="text"
            required
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>

          <button type="submit" className={style.submit}>
             Next
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
