"use client";
import * as yup from "yup";
import style from "./ProductCard.module.scss";
import { userSchema } from "@/app/validation/Uservalid";

export default function ProductCard() {
  const createUser = async (event: any) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log("any random name", isValid);
  };
  return (
    <div className={style.App}>
      <form onSubmit={createUser} className={style.form}>
        <input type="text" placeholder="Name.." name="name" />
        <input type="text" placeholder="felix@gmail.com" name="email" />
        <input type="text" placeholder="password123" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
