import React from "react";
import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Button from "../components/button";
import Input from "../components/input";

const SignInModal = ({ visible, onClose }) => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  const onLogin = (data) => {
    console.log(data);
  };
  const handleOnClose = (e) => {
    if (e.target.id === "close-modal") onClose();
  };

  if (!visible) return null;

  return (
    <React.Fragment>
      <section
        id="close-modal"
        onClick={handleOnClose}
        className="flex items-center justify-center  fixed inset-0 bg-black bg-opacity-80 backdrop-blur-0] z-40"
      >
        <div className="flex flex-col gap-8 bg-[#fff] mx-auto md:mx-24 p-10 rounded-[12px] h-auto w-[28rem] md:max-w-[40%] ">
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
                Sign In
              </Button>
            </div>
          </form>
          <h5 className="text-lg text-center text-secondary ">
            don't have an account?{" "}
            <a className="text-tetiary  font-bold" href="/register">
              Sign Up
            </a>
          </h5>
        </div>
      </section>
    </React.Fragment>
  );
};
export default SignInModal;
