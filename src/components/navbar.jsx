import logo from "/fixeet-logo.png";
import Button from "./button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Auth from "./auth";
import ReportIssueButton from "./ReportIssueButton";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
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

      <div className="flex gap-8 justify-end  ">
        <div className="hidden md:flex justify-between  items-center gap-8 font-bold ">
          <Link to="/home" className="flex cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="flex cursor-pointer">
            About
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className=" flex w-[4rem] cursor-pointer text-tetiary ml-4"
          >
            Sign In
          </button>
          <Link
            to="/all-reports"
            className="flex w-[6rem] cursor-pointer  text-tetiary"
          >
            All Reports
          </Link>
        </div>

        <ReportIssueButton />
      </div>
    </div>
  );
};

export default NavBar;
