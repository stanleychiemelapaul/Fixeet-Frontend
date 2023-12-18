import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Flex, Input, InputGroup, Divider, Center } from "@chakra-ui/react";

const About = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />
      <section className="bg-white ">
        <div className="flex flex-col flex-wrap md:flex-row gap-8 p-8 px-4 md:px-8 justify-center items-center max-w-[90rem] mx-auto w-full h-auto">
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-2xl md:text-5xl font-semibold flex flex-wrap w-[32rem]">
              Our aim is to ensure that citizens get the government to fix their
              local
              <span className="text-[#00BE7A] "> Issues!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-2xl md:text-5xl font-semibold flex flex-wrap w-[32rem]">
              Our aim is to ensure that citizens get the government to fix their
              local
              <span className="text-[#00BE7A] "> Issues!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-2xl md:text-5xl font-semibold flex flex-wrap w-[32rem]">
              Our aim is to ensure that citizens get the government to fix their
              local
              <span className="text-[#00BE7A] "> Issues!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-2xl md:text-5xl font-semibold flex flex-wrap w-[32rem]">
              Our aim is to ensure that citizens get the government to fix their
              local
              <span className="text-[#00BE7A] "> Issues!</span>
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default About;
