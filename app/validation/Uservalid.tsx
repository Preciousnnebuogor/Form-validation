import * as yup from "yup"; 
export const userSchema = yup.object().shape({
   firstName:yup.string().required("firstName required"),
   lastName:yup.string().required("lastName required"),
   date:yup.string().required("date required"),
   email: yup.string().email("please enter a valid email").required(),
   password: yup.string().min(4).max(10).required(),
   confirmPassword:yup.string().oneOf([yup.ref("password"),], "Password must match").required("Required"),
})

