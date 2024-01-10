"use client";
import * as yup from "yup";
import style from "./ProductCard.module.scss";
import { userSchema } from "@/app/validation/Uservalid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProductCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
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
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            required
            placeholder="Last Name.."
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            required
            placeholder="felix@gmail.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            required
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="text"
            required
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
          <button type="submit" className={style.submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
