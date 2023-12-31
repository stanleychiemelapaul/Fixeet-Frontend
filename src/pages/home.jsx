import React, { useState } from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Flex, Input, InputGroup, Divider, Center } from "@chakra-ui/react";
import SearchBox from "@/components/search";
import ReportIssueButton from "@/components/ReportIssueButton";

const Home = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  const [selectPosition, setSelectPosition] = useState(null);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />
      <section className="bg-white ">
        <div className="flex flex-col md:flex-row gap-4 p-8 px-4 md:px-8 justify-center items-center w-auto h-auto">
          <div className="flex flex-col gap-8 md:p-4">
            <p className="text-2xl  md:text-8xl font-semibold ">
              Bring your local issues to
              <span className="text-tetiary">Light!</span>
            </p>
          </div>
          <div className="flex flex-col gap-8 p-4 md:p-4">
            {" "}
            <h2 className="text-primary  flex flex-wrap md:text-2xl font-bold text-[1.1rem]">
              Call attention to issues in your locality and notify the
              appropriate authorities to get them resolved
            </h2>
            <SearchBox
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
            {/* <InputGroup size="xl" h="3rem" fontWeight={600}>
              <Input
                placeholder="Enter a location"
                bg="bg-white"
                color="#00BE7A"
                border="2px"
                borderRadius="4px"
                px="1rem"
              />
            </InputGroup> */}
            {/* <Input
              name="location"
              bg="bg-white"
              color="#00BE7A"
              border="2px"
              borderRadius="4px"
              height="2.8rem"
              errors={errors}
              placeholder="Enter a location"
              variant="primary"
            /> */}
            <div className="flex   md:max-w-[24rem] justify-between ">
              {" "}
              <Button
                variant="secondary"
                type="submit"
                className=" rounded-[4px] flex items-center gap-2 justify-center hover:border-[#007A4E]"
              >
                <IoEyeSharp /> Use my Location
              </Button>
              <div>
                <ReportIssueButton />
              </div>
              {/* <Button
                variant="primary"
                // type="submit"
                className="rounded-[4px] px-0 mx-0 flex gap-2 items-center justify-center hover:bg-[#007A4E]"
              >
                <FaEdit /> Report Issue
              </Button> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light flex flex-col gap-4 py-4 items-center space-x-10">
        <h2 className="font-bold text-2xl mt-4 flex mx-12 ">
          How to report an Issue.
        </h2>
        {/* <Flex
          alignItems="center"
          justifyItems="space-between"
          justifyContent="center"
          textColor="#A5A5A5"
          fontSize={"1rem"}
          gap="8rem"
          mb="4rem"
          w={{ base: "full", md: "90%" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        > */}

        <div className="flex-col   flex md:flex-row md:space-x-10 gap-4 ">
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 1 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium flex flex-col">
              <p className="">Enter a Location</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 2 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">Click Report Issue</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 3 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">Enter details of the issue</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-secondary font-semibold">
            <h2 className="text-5xl"> 4 </h2>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <div className="font-medium">
              <p className="">We'll send to the right authorities</p>
            </div>
          </div>
        </div>

        {/* </Flex> */}
      </section>
      <section className="bg-white items-center justify-center ">
        <div className="flex flex-col items-center p-8">
          <h2 className="font-bold text-2xl  ">Recent Reports</h2>
          <div className="flex flex-col md:flex-row gap-4 py-4 px-2 md:px-8  max-w-[90rem]  w-auto items-center justify-center space-x-5">
            <div className="flex flex-col gap-4 p-2 md:p-4">
              {" "}
              <img
                className="w-[auto] h-[auto]"
                src="/firebg.png"
                alt="fire incidence"
              />
              <div>
                <p className="text-xs text-tetiary">Nov 15, 2023</p>
                <h2 className="md:text-2xl font-semibold text-primary">
                  Raging Fire close to Oremeji Street
                </h2>
                <p className="text-xl flex flex-wrap md:w-[36rem] text-secondary">
                  There’s been a fire that has been burning for 4 days, the fire
                  started in Oremeji Forest and is fast approaching the
                  residential area. We’d like the appropriate authorities to
                  attend to this as soon as possible.
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                window.location.href = "/report";
              }}
              className="flex flex-col  gap-4 cursor-pointer p-2 "
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <img
                  className="rounded-[4px] max-w-[14rem] w-auto h-auto max-h-[11rem]"
                  src="/badroad.png"
                  alt="bad road picture"
                />
                <div className="flex flex-col  gap-2 ">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className="text-sm md:text-xl flex text-primary font-bold ">
                    Road in Abysmal Shape, Oremeji Street, Ojuolape LGA, Lagos
                    State.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <img
                  className="rounded-none max-w-[14rem] w-auto h-auto max-h-[11rem]"
                  src="/flood.png"
                  alt="Flood Picture"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className=" text-sm md:text-xl  flex  text-primary font-bold">
                    Flood on Oremeji Street, Ojuolape LGA, Lagos State.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <img
                  className="rounded-none max-w-[14rem] w-full h-auto max-h-[11rem]"
                  src="/abandonbuilding.png"
                  alt="Abandoned building picture"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className="text-sm md:text-xl flex text-primary font-bold">
                    Abandoned building that Area Boys use to perform bad
                    activities.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 bg-white p-4 ">
              <div className="flex flex-col gap-4 items-start">
                <img
                  className="rounded-[4px]  w-[auto] h-[auto] "
                  src="/badroad.png"
                  alt="bad road picture"
                />
                <div className="flex flex-col">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className=" flex flex-wrap  text-primary font-bold">
                    Road in Abysmal Shape, Oremeji Street, Ojuolape LGA, Lagos
                    State.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <img
                  className="rounded-none  w-auto h-auto"
                  src="/flood.png"
                  alt="Flood Picture"
                />
                <div className="flex flex-col ">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className=" flex flex-wrap text-primary font-bold">
                    Flood on Oremeji Street, Ojuolape LGA, Lagos State.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <img
                  className="rounded-none w-auto h-auto "
                  src="/abandonbuilding.png"
                  alt="Abandoned building picture"
                />
                <div className="flex flex-col">
                  <p className="text-xs text-tetiary">Nov 15, 2023</p>
                  <p className=" flex flex-wrap   text-primary font-bold">
                    Abandoned building that Area Boys use to perform bad
                    activities.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
