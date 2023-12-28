import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Profile from "../components/profilePicture";

const About = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />
      <Profile />
      <section className="bg-white ">
        <div className="flex flex-col md:flex-row gap-6 p-8  md:p-8 justify-center items-center md:text-3xl md:w-auto h-auto tracking-wider ">
          <h2 className="  font-semibold">
            Our aim is to ensure that citizens get the government to fix their
            local
            <span className="text-[#00BE7A] "> Issues!</span>
          </h2>
          <h2 className=" font-semibold ">
            Our aim is to ensure that citizens get the government to fix their
            local
            <span className="text-[#00BE7A] "> Issues!</span>
          </h2>{" "}
          <h2 className=" font-semibold  ">
            Our aim is to ensure that citizens get the government to fix their
            local
            <span className="text-[#00BE7A] "> Issues!</span>
          </h2>{" "}
          <h2 className="font-semibold ">
            Our aim is to ensure that citizens get the government to fix their
            local
            <span className="text-[#00BE7A] "> Issues!</span>
          </h2>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default About;
