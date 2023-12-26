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
    <div className="bg-light flex justify-between items-center px-8 py-4">
      {/* {showModal && <Modal showSignIn={true} onClose={handleModalClose} />} */}
      {showModal && (
        // <Modal showSignIn={true} onClose={handleModalClose}>
        <Auth onClose={handleModalClose} />
        // </Modal>
      )}
      <div className="w-2/5 flex  justify-between items-center relative">
        <div>
          <img src={logo} alt="logo" className="" />
        </div>
      </div>

      {/* Menu and Close icons */}
      <div className="fixed top-[15px] right-[30px] text-[40px] cursor-pointer md:hidden">
        {showMobileNav ? (
          <IoClose onClick={closeMobileNav} />
        ) : (
          <IoMenu onClick={toggleMobileNav} />
        )}
      </div>

      {/* Main Menu */}
      <div
        className={`relative bg-[#002626] w-full h-[100vh] text-white flex flex-col justify-center items-center text-[10px] tracking-[1px] gap-4 md:hidden overflow-hidden ${
          showMobileNav ? "block" : "hidden"
        }`}
      >
        {/* Close button in mobile navbar */}
        <div className="absolute top-0 right-0 mr-4 mt-4">
          <IoClose onClick={closeMobileNav} />
        </div>
        <Link
          to="/home"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
        >
          About
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 hover:bg-[green] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
        >
          Sign In
        </button>
        <Link
          to="/all-reports"
          className="mb-4 hover:bg-[green] rounded-md w-auto p-1 duration-500 hover:-translate-y-1"
        >
          All Reports
        </Link>

        <ReportIssueButton className="mb-4 hover:bg-[green] rounded-md w-auto p-1 duration-500 hover:-translate-y-1" />
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
            Sign In
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
  );
};

export default NavBar;
