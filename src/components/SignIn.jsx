import React from "react";
import { LoginSchema } from "@/config/schema";
import useSubmit from "@/hooks/useSubmit";
import Button from "@/components/button";
import Input from "@/components/input";

const SignIn = ({ visible, switchToSignUp, onClose }) => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  const onLogin = (data) => {
    console.log(data);
  };
  const handleOnClose = (e) => {
    if (e.target.id === "close-modal") onClose();
  };

  // if (!visible) return null;

  return (
    <React.Fragment>
      <section
        id="close-modal"
        onClick={handleOnClose}
        // className="flex items-center justify-center"
        className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-[0.8] backdrop-blur-0"
      >
        <div className="flex flex-col gap-8 bg-[#fff] mx-auto md:mx-24 p-10 rounded-[12px] h-auto w-[28rem] md:max-w-[40%]">
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
              <p className="text-lg text-center text-secondary">
                Don't have an account?{" "}
                <span
                  className="text-tetiary font-bold cursor-pointer"
                  onClick={switchToSignUp}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignIn;
