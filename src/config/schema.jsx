import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().trim().email().required("Email is required"),
  password: yup.string().trim().min(8).required("Password is required"),
});

export const SignUpSchema = yup.object().shape({
  name: yup.string().trim().required("Your Name is required"),
  username: yup.string().trim().required("Your Username is required"),
  email: yup.string().trim().email().required("Your Email is Required"),
  password: yup.string().trim().min(8).required(),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
    .required(),
});
