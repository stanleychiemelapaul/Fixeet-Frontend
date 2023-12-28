import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import MapView from "@/components/mymap";
import Button from "@/components/button";
import { Flex, Input, InputGroup, Divider, Center } from "@chakra-ui/react";
import { Select, Textarea } from "@chakra-ui/react";
import { IoCaretBackOutline } from "react-icons/io5";

const Report = (handleOnClose) => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />

      <section className="bg-white items-center justify-center ">
        <div className="flex flex-col w-auto md:flex-row gap-4 p-4 md:px-4   justify-center  bg-white ">
          <div className="flex flex-col gap-4  p-4">
            <div className="flex items-center  gap-4 ">
              <p className="text-primary text-[1.1rem]  md:text-2xl font-bold ">
                Road in Abysmal Shape at Oremeji Street.
              </p>
              <p
                id="close-modal"
                onClick={() => {
                  window.location.href = "/all-reports";
                }}
                className="text-sm w-[6rem] flex items-center cursor-pointer text-tetiary"
              >
                {" "}
                <IoCaretBackOutline /> Go Back
              </p>
            </div>

            <div className="flex items-center bg-white">
              <img
                className="rounded-[4px] h-[20rem] w-[28rem]"
                src="/badroad.png"
                alt="bad road picture"
              />
            </div>
            <div className="grid grid-cols-3 items-center max-w-md  justify-center">
              <img src="/badroad1.png" alt="badroad1 Picture" />
              <img src="/badroad3.png" alt="badroad3 Picture" />
              <img src="/badroad2.png" alt="badroad2 Picture" />
            </div>

            <div className="flex flex-col ">
              <p className="text-xs text-tetiary">Nov 15, 2023</p>
              <p className=" flex  w-[auto]  text-secondary ">
                The road at Oremeji Street, Ojuolape LGA of Lagos State has been
                bad for over a year. Cars can’t even traverse this road as they
                usually get stuck in the muddy patches. Only motorcycles and big
                vehicles have managed to pass.
              </p>
            </div>

            <div className="flex gap-4 items-center justify-between ">
              <Button className="hover:bg-[#989898]" variant="primary1">
                <div className="flex items-center  justify-center gap-4 text-white font-semibold">
                  <h2 className="text-2xl"> 24 </h2>
                  <Center height="40px">
                    <Divider orientation="vertical" />
                  </Center>
                  <p className="font-medium flex flex-col">Upvote</p>
                </div>
              </Button>
              <Button className="hover:bg-[#007A4E]" variant="primary">
                <div className="flex items-center  justify-center gap-4 text-white font-semibold">
                  <h2 className="text-3xl"> 0 </h2>
                  <Center height="40px">
                    <Divider orientation="vertical" />
                  </Center>
                  <div className="font-medium flex flex-col">
                    <p>Resolved</p>
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col bg-light  p-4 gap-4 w-[auto] rounded-[4px]">
              <Textarea placeholder="Enter comments here" />
              <Button variant="primary" type="submit">
                Comment
              </Button>
            </div>

            <p className="  text-secondary ">
              This is a comment made by{" "}
              <span className=" text-tetiary">Firstname Lastname</span> on{" "}
              <span className="text-sm text-tetiary">Dec 12, 2023</span>
            </p>
          </div>

          <div className="hidden md:flex md:flex-col gap-4  md:p-1 bg-tetiary z-10">
            <MapView />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Report;
