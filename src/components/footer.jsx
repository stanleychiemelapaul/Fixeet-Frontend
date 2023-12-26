import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import Button from "./button";
import { Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <section className="bg-primary flex flex-col gap-4 p-6 items-center justify-center text-white w-auto m  ">
      <div className=" flex flex-col gap-8 md:flex-row md:justify-between md:mr-6">
        <div className="flex p-4 ml-4 ">
          <div className="flex items-center justify-center md:items-start flex-col  w-auto gap-2 ">
            <img src={Logo} alt="Fixeetlogo" />
            <p className="  text-secondary flex-wrap w-auto md:max-w-md">
              Mapping and reporting local issues to the authorities responsible
              for fixing them.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-around flex-wrap items-center gap-4 p-4">
            <Link className="" to="#">
              Contact Us
            </Link>
            <Link to="#">Your Reports</Link>
            <Link to="#">All Reports</Link>
            <Link to="#">Local Alerts</Link>
            <Link to="#">About Us</Link>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white p-8 gap-4 w-[auto] rounded-[4px]">
          <p className=" text-secondary">
            You can help keep this site running by donating to the cause.
          </p>
          <Button variant="primary" type="submit">
            Donate Now
          </Button>
        </div>
      </div>

      <div className=" items-center text-center w-full text-[#FAFAFAAF]">
        <p>Isaac Olowookere & Stanley Paul</p>
        <Divider />
        <p>
          &copy; Copyright Fixeet {new Date().getUTCFullYear()}. All right
          reserved
        </p>
      </div>
    </section>
    // <footer className="bg-primary p-4 ">
    //   <div className="flex flex-col gap-8">
    //     <div className="flex justify-center gap-[10rem] p-4  items-center space-x-10">
    //       <div className="gap-4 flex flex-col">
    //         <img
    //           src={Logo}
    //           alt="Fixeetlogo"
    //           className="max-w-[11rem]  h-[3rem] "
    //         />
    //         <p className=" flex-wrap w-[16rem]">
    //           Mapping and reporting local issues to the authorities responsible
    //           for fixing them.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center justify-center flex-wrap gap-x-8 gap-y-4 font-semibold text-lg text-white">
    //         <Link className="text-secondary" to="#">
    //           Reporting
    //         </Link>
    //         <Link to="#">Your Reports</Link>
    //         <Link to="#">All Reports</Link>
    //         <Link to="#">Local Alerts</Link>
    //       </div>
    //       <div className="flex flex-col bg-white items-center  p-8 gap-4 w-[23rem] rounded-[4px]">
    //         <p className="text-secondary">
    //           You can help keep this site running by donating to the cause.
    //         </p>
    //         <Button variant="primary" type="submit">
    //           Donate Now
    //         </Button>
    //       </div>
    //     </div>
    //     <Divider />
    //     <p className="mx-auto text-center w-full text-[#FAFAFAAF]">
    //       &copy; Copyright Fixeet {new Date().getUTCFullYear()}. All right
    //       reserved
    //     </p>
    //   </div>
    // </footer>
  );
};

export default Footer;
