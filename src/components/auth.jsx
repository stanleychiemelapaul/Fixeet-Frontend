import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const auth = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const switchToSignIn = () => {
    setShowSignIn(true);
  };

  const switchToSignUp = () => {
    setShowSignIn(false);
  };

  return (
    <div>
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
  );
};

export default auth;
