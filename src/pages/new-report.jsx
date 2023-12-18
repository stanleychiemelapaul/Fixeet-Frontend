import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Flex, Input, InputGroup, Divider, Center } from "@chakra-ui/react";

const NewReports = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />

      <section className="bg-white items-center justify-center ">
        <div className="flex flex-col md:flex-row gap-8 py-8 px-4 md:px-8  max-w-[90rem] mx-auto w-full items-center justify-center space-x-5 bg-white">
          <div className="flex flex-col gap-8 ">
            <div className="flex gap-6 items-start">
              <img
                className="rounded-[4px] max-w-[14rem] w-full h-auto max-h-[11rem]"
                src="/badroad.png"
                alt="bad road picture"
              />
              <div className="flex flex-col gap-4">
                <p className="text-xs text-tetiary">Nov 15, 2023</p>
                <p className="text-xl flex flex-wrap w-[12rem] text-primary font-bold">
                  Road in Abysmal Shape, Oremeji Street, Ojuolape LGA, Lagos
                  State.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <img
                className="rounded-none max-w-[14rem] w-full h-auto max-h-[11rem]"
                src="/flood.png"
                alt="Flood Picture"
              />
              <div className="flex flex-col gap-4">
                <p className="text-xs text-tetiary">Nov 15, 2023</p>
                <p className="text-xl flex flex-wrap w-[12rem]  text-primary font-bold">
                  Flood on Oremeji Street, Ojuolape LGA, Lagos State.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <img
                className="rounded-none max-w-[14rem] w-full h-auto max-h-[11rem]"
                src="/abandonbuilding.png"
                alt="Abandoned building picture"
              />
              <div className="flex flex-col gap-4">
                <p className="text-xs text-tetiary">Nov 15, 2023</p>
                <p className="text-xl flex flex-wrap w-[12rem]  text-primary font-bold">
                  Abandoned building that Area Boys use to perform bad
                  activities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  md:p-4 bg-light-purple">
            {" "}
            <img
              className="w-[36rem] h-[24rem]"
              src="/firebg.png"
              alt="fire incidence"
            />
            <p className="text-xs text-tetiary">Nov 15, 2023</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Raging Fire close to Oremeji Street
            </h2>
            <p className="text-xl flex flex-wrap w-[36rem] text-secondary">
              There’s been a fire that has been burning for 4 days, the fire
              started in Oremeji Forest and is fast approaching the residential
              area. We’d like the appropriate authorities to attend to this as
              soon as possible.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default NewReports;
