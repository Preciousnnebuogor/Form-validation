"use client";
import style from "./second.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/app/validation/Uservalid";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ThirdForm() {
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
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input 
        type="email" 
        placeholder="Email" 
        {...register("email")} 
        />
        <input 
        type="phone" 
        placeholder="Phone"
         {...register("phone")}
          />
        <input
         type="address"
          placeholder="Address" 
          {...register("address")} 
          />
        <input
          type="text"
          placeholder="Socialmedia Link"
          {...register("Socialmedia")}
        />
        <button 
        type="submit">Next</button>
      </form>
    </div>
  );
}
