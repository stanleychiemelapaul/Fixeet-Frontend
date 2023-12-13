import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Flex, Input, InputGroup, Divider, Center } from "@chakra-ui/react";

const Login = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />
      <section className="bg-white ">
        <div className="flex flex-col md:flex-row gap-8 p-8 px-4 md:px-8 justify-center items-center max-w-[90rem] mx-auto w-full h-[20rem]">
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-2xl md:text-7xl font-semibold flex flex-wrap w-[32rem]">
              Bring your local issues to
              <span className="text-[#00BE7A] "> Light!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:p-4">
            {" "}
            <h2 className="text-secondary font-semibold flex flex-wrap w-[23rem]">
              Call attention to issues in your locality and notify the
              appropriate authorities to get them resolved
            </h2>
            <InputGroup size="xl" h="3rem" maxW="23rem" fontWeight={600}>
              <Input
                placeholder="Enter a location"
                bg="bg-white"
                color="#00BE7A"
                border="2px"
                px="1rem"
              />
            </InputGroup>
            <div className="flex gap-4 justify-between w-[24rem]">
              {" "}
              <Button variant="secondary" type="submit" width="24rem">
                Use Current Location
              </Button>
              <Button variant="primary" type="submit" width="24rem">
                Report Issue
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light flex flex-col items-center gap-8 py-6  space-x-10">
        <h2 className="font-bold text-2xl mt-4 flex mx-12 justify-start  items-start">
          How to report an Issue.
        </h2>
        <Flex
          alignItems="center"
          justifyItems="space-between"
          justifyContent="center"
          textColor="#A5A5A5"
          fontSize={"1rem"}
          gap="8rem"
          mb="4rem"
          w={{ base: "full", md: "90%" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 1 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium flex flex-col">
              <p className="">Enter a</p>
              <p>Location</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 2 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">Select location</p>
              <p>on Map</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 3 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">Enter details</p>
              <p>of the issue</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 4 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">We'll send to the</p>
              <p>right authorities</p>
            </div>
          </div>
        </Flex>
      </section>
      <section className="bg-white items-center justify-center ">
        <div className="flex flex-col items-center p-8">
          <h2 className="font-bold text-2xl  ">Recent Reports</h2>
          <div className="flex flex-col md:flex-row gap-8 py-8 px-4 md:px-8  max-w-[90rem] mx-auto w-full items-center justify-center space-x-5">
            <div className="flex flex-col gap-4  md:p-4">
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
                started in Oremeji Forest and is fast approaching the
                residential area. We’d like the appropriate authorities to
                attend to this as soon as possible.
              </p>
            </div>
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
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
