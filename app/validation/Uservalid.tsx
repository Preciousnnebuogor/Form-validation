import * as yup from "yup"; 
export const userSchema = yup.object().shape({
   firstName:yup.string().required("firstName required"),
   lastName:yup.string().required("lastName required"),
   date:yup.string().required("date required"),
   email: yup.string().email("please enter a valid email").required(),
   password: yup.string().min(4).max(10).required(),
   confirmPassword:yup.string().oneOf([yup.ref("password"),], "Password must match").required("Required"),
   country:yup.string().required("country required"),
   state:yup.string().required("state required"),
   LGA:yup.string().required("LGA required"),
   city:yup.string().required("city required"),
   phone:yup.string().required("phone required"),
   address:yup.string().required("address required"),
   Socialmedia:yup.string().required("Socialmedia required"),
})

