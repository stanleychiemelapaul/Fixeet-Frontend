import React from "react";
import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Button from "../components/button";
import Input from "../components/input";

const SignUp = ({ visible, onClose, switchToSignIn }) => {
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
        className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-[0.8] backdrop-blur-0 z-40"
      >
        <div className="flex flex-col gap-8 bg-[#fff] mx-auto md:mx-24 p-10 rounded-xl h-auto md:w-[28rem] md:max-w-[40%]">
          <h1 className="text-primary md:text-4xl text-2xl font-bold ">
            Sign Up
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
              type="text"
              register={register}
              errors={errors}
              autoComplete="name"
              placeholder="What should we call you?"
              label="Full Name"
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
              <p className="text-lg text-center text-secondary">
                Already have an account?{" "}
                <span
                  className="text-tetiary font-bold cursor-pointer"
                  onClick={switchToSignIn}
                >
                  Sign In
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignUp;
