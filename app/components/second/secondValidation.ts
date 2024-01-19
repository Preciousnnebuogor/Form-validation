import * as yup from "yup";

export const secondValidationSchema = yup.object().shape({
  country: yup.string().required("country required"),
  state: yup.string().required("state required"),
  LGA: yup.string().required("LGA required"),
  city: yup.string().required("city required"),
});
