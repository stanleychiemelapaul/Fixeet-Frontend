import React from "react";
import axios from "axios";
import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Button from "../components/button";
import Input from "../components/input";

const Login = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    axios
      .post("https://fixeet.onrender.com/auth/userlogin", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <React.Fragment>
      <section className="flex items-center justify-center mt-6 ">
        <div className="flex flex-col gap-6 bg-[#fff] mx-auto md:mx-24 p-10 rounded-[12px] h-auto w-[28rem] md:max-w-[40%] ">
          <h1 className="text-primary md:text-4xl text-2xl font-bold ">
            Sign In
          </h1>
          <p className="text-secondary text-sm md:text-base font-normal ">
            Enter your Account Details Below
          </p>
          <form
            className="flex flex-col gap-2 "
            onSubmit={handleSubmit(onLogin)}
          >
            <Input
              name="name"
              type="name"
              register={register}
              errors={errors}
              placeholder="What Should we call you?"
              label="Name"
              variant="primary"
            />
            <Input
              name="email"
              type="email"
              register={register}
              errors={errors}
              autoComplete="email"
              placeholder="Enter Email Address"
              label="Email Address"
              variant="primary"
            />
            <Input
              name="password"
              type="password"
              register={register}
              errors={errors}
              placeholder="Enter Password"
              id="password"
              label="Password"
              variant="primary"
            />
            <div className="flex flex-col gap-2">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
          <h5 className="text-lg text-center text-secondary ">
            Already have an account?{" "}
            <a className="text-tetiary  font-bold" href="/login">
              Sign In
            </a>
          </h5>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Login;
