/* eslint-disable react/prop-types */

import "../styles/button.css";

const Button = ({ children, variant, borderVariant, className, style }) => {
  let buttonClass = "btn"; // Default class

  if (variant === "primary") {
    buttonClass += " btn-primary";
  } else if (variant === "secondary") {
    buttonClass += " btn-secondary ";
  } else if (variant === "primary1") {
    buttonClass += " btn-primary1 ";
  } else if (variant === "primary2") {
    buttonClass += " btn-primary2 ";
  }
  if (borderVariant === "noRadius") {
    buttonClass += " btn-radius ";
  }
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
    <button className={buttonClass} style={style}>
      {children}
    </button>
  );
};

export default Button;
