import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "@/styles/modal.css"; // Import your CSS file for transitions

const Modal = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(true);
  const handleModalClose = (e) => {
    if (e.target.id === "close-modal") onClose();
  };

  const switchToSignIn = () => {
    setShowSignIn(true);
  };

  const switchToSignUp = () => {
    setShowSignIn(false);
  };

  return (
    <div
      id="close-modal"
      onClick={handleModalClose}
      className="modal-container"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Use CSS classes to handle transitions between Sign In and Sign Up views */}
        <div
          className={`modal-view ${
            showSignIn ? "show-sign-in" : "show-sign-up"
          }`}
        >
          {showSignIn ? (
            <SignIn
              visible={true}
              onClose={onClose}
              switchToSignUp={switchToSignUp}
            />
          ) : (
            <SignUp
              visible={true}
              onClose={onClose}
              switchToSignIn={switchToSignIn}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
