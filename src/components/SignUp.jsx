import React, { useState } from "react";
import axios from "axios";
import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Button from "../components/button";
import Input from "../components/input";
import { apiurl } from "../config/apiurl";

const SignUp = ({ visible, onClose, switchToSignIn }) => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const [errResponse, seterrResponse] = useState(null);
  const [successRes, setsuccessRes] = useState(null);

  const onSignupSubmit = (data) => {
    console.log(data);
    let userName = data.name;
    let emailAddress = data.email;
    let userPassword = data.password;
    let repeatPassword = data.repeatPassword;
    console.log(data);
    axios
      .post(apiurl + "/auth/registeruser", {
        userName,
        emailAddress,
        userPassword,
        repeatPassword,
      })
      .then(function (response) {
        // Handle successful login here (e.g., store tokens, redirect, etc.)
        setsuccessRes(response.data.message);
      })
      .catch(function (error) {
        if (error.response.status === 422) {
          seterrResponse(error.response.data.message);
        } else {
          seterrResponse("An error occurred. Please try again later.");
        }
      });
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
        <div className="flex flex-col gap-2 bg-[#fff] mx-auto md:mx-24 p-10 rounded-xl h-[36rem] md:w-[28rem] md:max-w-[40%]">
          <h1 className="text-primary md:text-4xl text-2xl font-bold -mt-3">
            Sign Up
          </h1>
          {errResponse ? (
            <div
              className="text-center gen alert alert-danger text-danger"
              id="message"
              role="alert"
              style={{ color: "red" }}
            >
              {errResponse}
            </div>
          ) : successRes ? (
            <div
              className="text-center gen alert alert-success"
              id="message"
              role="alert"
              style={{ color: "green", fontWeight: "bold" }}
            >
              {successRes}
            </div>
          ) : (
            <p className=" text-center  text-secondary text-sm md:text-base font-normal ">
              Enter your Account Details Below
            </p>
          )}

          <form
            className="flex flex-col gap-2 "
            onSubmit={handleSubmit(onSignupSubmit)}
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
            <Input
              name="repeatPassword"
              type="password"
              register={register}
              errors={errors}
              placeholder="Confirm Password"
              id="repeatPassword"
              label="Repeat Password"
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