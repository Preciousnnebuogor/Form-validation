"use client";

import { useFormStore } from "@/app/zustand/Form";
import { useFormState } from "react-dom";
import First from "../first/First";
import SecondForm from "../second/second";
import ThirdForm from "../third/Third";


export default function ProductCard() {
  const z = useFormStore();
  if (z.step == "step1") {
    return <First />;
  } else if (z.step == "step2") {
    return <SecondForm />;
  } else if (z.step == "step3") {
    return <ThirdForm />;
  } else {
    return <First />;
  }
}
