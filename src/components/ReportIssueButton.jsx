import ReportIssue from "./ReportIssue";
import React, { useState } from "react";

const ReportIssueButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className=" flex w-[10rem] cursor-pointer text-white ml-4 bg-tetiary hover:bg-[#007A4E] items-center rounded-[4px] h-[2.7rem] justify-center"
        variant="primary"
      >
        Report an Issue
      </button>
      {showModal && <ReportIssue onClose={handleModalClose} />}
    </>
  );
};

export default ReportIssueButton;
