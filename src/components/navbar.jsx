import logo from "/fixeet-logo.png";
import Button from "./button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Auth from "./auth";
import ReportIssueButton from "./ReportIssueButton";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <div>
      {/* Main Menu */}
      <div
        className={` fixed bg-[#587575] w-[100vw] h-screen text-white flex flex-col justify-center items-center text-[20px] z-20 tracking-[1px] gap-2 md:hidden overflow-hidden origin-left duration-500 ${
          showMobileNav ? "block" : "hidden"
        }`}
      >
        {/* Close button in mobile navbar */}
        <div className=" text-white fixed top-[.2rem] right-[1.5rem] text-[2.5rem] cursor-pointer mr-2 mt-2">
          <IoClose onClick={closeMobileNav} />
        </div>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          About
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          Login
        </button>
        <Link
          to="/all-reports"
          className="mb-6 hover:bg-[green] rounded-md w-auto p-2 duration-500 hover:-translate-y-1"
        >
          All Reports
        </Link>
        <ReportIssueButton />
      </div>
      <div className="bg-light flex justify-between items-center px-8 py-4 ">
        {showModal && <Auth onClose={handleModalClose} />}
        <div className="w-2/5  flex  justify-between items-center relative">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu and Close icons */}
        <div className="absolute top-[0.9rem] right-[2rem] text-[2.5rem] cursor-pointer md:hidden">
          {showMobileNav ? (
            <IoClose onClick={closeMobileNav} />
          ) : (
            <IoMenu onClick={toggleMobileNav} />
          )}
        </div>
        <div className="flex gap-8 justify-end  ">
          <div className="hidden md:flex justify-between  items-center gap-8 font-bold ">
            <Link
              to="/home"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
            >
              About
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className=" flex  hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1 cursor-pointer "
            >
              Login
            </button>
            <Link
              to="/all-reports"
              className="flex  cursor-pointer hover:bg-[#becabe] rounded-md w-auto p-1 duration-500 hover:-translate-y-1 "
            >
              All Reports
            </Link>
            <ReportIssueButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
