import React, { useState } from "react";
import useSubmit from "@/hooks/useSubmit";
import { LoginSchema } from "@/config/schema";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import MapView from "@/components/mymap";
import Button from "@/components/button";
import SearchBox from "../components/search";

const AllReports = () => {
  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  const [selectPosition, setSelectPosition] = useState(null);

  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <NavBar />

      <section className="bg-white items-start justify-center ">
        <div className="flex flex-col md:flex-row gap-4 py-4 px-4 md:px-4  max-w-[90rem] mx-auto w-full items-start justify-center space-x-5 ">
          <div
            onClick={() => {
              window.location.href = "/report";
            }}
            className="flex flex-col gap-4 cursor-pointer p-2"
          >
            <div className="flex flex-col ">
              <p className="text-secondary text-2xl font-semibold">
                All Reports
              </p>
              <p className="text-secondary text-sm font-semibold">
                showing <span className="text-tetiary">1-3</span> of 245 results
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <img
                className="rounded-[4px] max-w-[14rem] w-full h-auto max-h-[11rem]"
                src="/badroad.png"
                alt="bad road picture"
              />
              <div className="flex flex-col gap-2 ">
                <p className="text-xs text-tetiary">Nov 15, 2023</p>
                <p className="md:text-xl flex text-primary font-bold text-sm">
                  Road in Abysmal Shape, Oremeji Street, Ojuolape LGA, Lagos
                  State.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img
                className="rounded-none max-w-[14rem] w-full h-auto max-h-[11rem]"
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

            <div className="flex gap-4 items-start">
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
            <div className="flex gap-4 justify-between">
              <Button className="hover:bg-[#989898]" variant="primary1">
                Previous
              </Button>
              <Button className="hover:bg-[#007A4E]" variant="primary">
                Next
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SearchBox
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
            <div className="hidden md:flex md:flex-col gap-4  md:p-1 bg-tetiary z-10">
              <MapView selectPosition={selectPosition} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AllReports;
