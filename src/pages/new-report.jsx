import React from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { IoCaretBackOutline } from "react-icons/io5";
import MapView from "../components/mymap";
import Button from "@/components/button";
import { Textarea, Select } from "@chakra-ui/react";

const NewReports = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />

      <section className="bg-white items-center justify-center ">
        <div className="flex flex-col md:flex-row gap-8 py-8 px-4 md:px-8  max-w-[90rem] mx-auto w-full  justify-center space-x-5 bg-white">
          <div className="flex flex-col gap-8 ">
            <div className="flex  items-start gap-2">
              <Select
                color="#00BE7A"
                border="2px"
                borderRadius="4px"
                placeholder="Select Cateogory"
                w="20rem"
                h="2.5rem"
              >
                <option value="option1">Bad Road</option>
                <option value="option2">Flood</option>
                <option value="option3">Electricity</option>
                <option value="option4">Security</option>
                <option value="option5">Others</option>
              </Select>
              <p className="text-xs flex items-center cursor-pointer text-tetiary">
                {" "}
                <IoCaretBackOutline /> Go Back
              </p>
            </div>
            <div className="flex  items-start gap-2">
              <Select
                color="#00BE7A"
                border="2px"
                borderRadius="4px"
                placeholder="Select State"
                w="12rem"
                h="2.5rem"
              >
                <option value="option1">Bad Road</option>
                <option value="option2">Flood</option>
                <option value="option3">Electricity</option>
                <option value="option4">Security</option>
                <option value="option5">Others</option>
              </Select>
              <Select
                color="#00BE7A"
                border="2px"
                borderRadius="4px"
                placeholder="Select LGA"
                w="12rem"
                h="2.5rem"
              >
                <option value="option1">Bad Road</option>
                <option value="option2">Flood</option>
                <option value="option3">Electricity</option>
                <option value="option4">Security</option>
                <option value="option5">Others</option>
              </Select>
            </div>

            <Textarea className="border-2" placeholder="Description" />

            <Button
              variant="primary"
              type="submit"
              className="h-[3rem] rounded-[4px] hover:bg-[#007A4E]"
            >
              Report An Issue
            </Button>
          </div>
          <div className="flex flex-col gap-4  md:p-1 bg-tetiary">
            <MapView />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default NewReports;
