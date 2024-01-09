import React, { useState } from "react";
import axios from "axios";
import { LoginSchema } from "@/config/schema";
import useSubmit from "@/hooks/useSubmit";
import Button from "@/components/button";
import Input from "@/components/input";
import { apiurl } from "../config/apiurl";

const SignIn = ({ visible, switchToSignUp, onClose }) => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  // const onLogin = (data) => {
  //   console.log(data);
  // };

  const [errResponse, seterrResponse] = useState(null);
  const [successRes, setsuccessRes] = useState(null);

  const onLogin = async (data) => {
    // event.preventDefault();
    let email = data.email;
    let password = data.password;
    console.log(data);
    axios
      .post(apiurl + "/auth/userlogin", {
        email,
        password,
      })
      .then(function (response) {
        // Handle successful login here (e.g., store tokens, redirect, etc.)
        console.log("Login successful:", response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Server responded with error status:",
            error.response.status
          );
          console.log("Error data:", error.response.data);

          if (error.response.status === 422) {
            seterrResponse(error.response.data.message);
          } else {
            seterrResponse("An error occurred. Please try again later.");
          }
        } else if (error.request) {
          console.log("No response received:", error.request);
          // Handle request-related errors
        } else {
          console.log("Error setting up the request:", error.message);
          seterrResponse("Error occurred while setting up your request");
        }
      });
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
        <div className="flex flex-col gap-8 bg-[#fff] mx-auto md:mx-24 p-10 rounded-[12px] h-auto md:w-[28rem] md:max-w-[50%]">
          <h1 className="text-primary md:text-4xl text-2xl font-bold ">
            Login
          </h1>
          {errResponse ? (
            <div
              className="text-center alert alert-danger text-danger"
              id="message"
              role="alert"
              style={{ color: "red" }}
            >
              {errResponse}
            </div>
          ) : successRes ? (
            <div
              className="text-center alert alert-success"
              id="message"
              role="alert"
            >
              {successRes}
              <p className="mt-0 pt-0">
                Redirecting <i className="fa fa-spinner fa-pulse"></i>
              </p>
            </div>
          ) : (
            <p className="text-secondary text-sm md:text-base font-normal ">
              Enter your Account Details Below
            </p>
          )}

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
            <div className="flex flex-col gap-2 ">
              <Button variant="primary" type="submit">
                Login
              </Button>
              <p className="text-lg text-center text-secondary">
                Don't have an account?{" "}
                <span
                  className="text-tetiary font-bold cursor-pointer"
                  onClick={switchToSignUp}
                >
                  Register
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
