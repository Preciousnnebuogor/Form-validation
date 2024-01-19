import * as yup from "yup";

export const thirdValidationSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required(),
  phone: yup.string().max(11).required("phone required"),
  address: yup.string().required("address required"),
  Socialmedia: yup.string().required("Socialmedia required"),
});
