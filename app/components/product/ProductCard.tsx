"use client";
import * as yup from "yup";
import style from "./ProductCard.module.scss";
import { userSchema } from "@/app/validation/Uservalid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ProductCard() {
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
    console.log(errors.email?.message,"error message")
    if (
      errors.email?.message ||
      errors.firstName?.message ||
      errors.lastName?.message ||
      errors.password?.message ||
      errors.confirmPassword
    ) {
      toast.error("Fill all empty fields");
      return;
    }
    setIsSubmit(true);
    setTimeout(() => {
      console.log({ data });
      toast.info("Loading");

      reset();
    });
  };

  return (
    <>
      <div className={style.App}>
        <h1>Account Login</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className={style.form}>
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

          <button
            type="submit"
            className={style.submit}
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
