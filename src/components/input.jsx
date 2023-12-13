import { useState, memo } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = memo(
  // eslint-disable-next-line react/prop-types
  ({
    name,
    placeholder,
    type,
    register,
    errors,
    autoComplete,
    disabled,
    style,
  }) => {
    const [inputType, setInputType] = useState(type);

    const toggleInputType = () => {
      setInputType("text");
      setTimeout(() => {
        setInputType("password");
      }, 5000);
    };

    return (
      <div className="mb-2">
        <div className="relative w-full">
          <input
            type={inputType}
            id={name}
            {...register(name, { required: true })}
            autoSave="true"
            autoCorrect="on"
            autoComplete={autoComplete}
            placeholder={placeholder}
            className={`input ${
              disabled === true ? "cursor-not-allowed" : "cursor-text"
            } w-full p-2 rounded-[6px] border-[#a8a7a7] border-solid border placeholder:text-text1`}
            style={style}
          />
          {type === "password" && (
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleInputType}
            >
              {inputType === "password" ? (
                <AiOutlineEyeInvisible className="text-2xl text-slate-500" />
              ) : (
                <AiOutlineEye className="text-2xl text-slate-500" />
              )}
            </span>
          )}
        </div>
        {errors[name] && (
          <span role="alert" className="text-sm text-red-700 capitalize">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
