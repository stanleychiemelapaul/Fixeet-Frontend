import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AppInput = ({
  label,
  name,
  placeholder,
  type,
  register,
  errors,
  disabled,
  width = "100%",
  autoComplete,
  variant = "primary",
  ...props
}) => {
  return (
    <FormControl className="flex flex-col mb-4" maxHeight="5rem">
      {label && (
        <FormLabel
          htmlFor={name}
          color="typography.text-primary"
          fontSize=".875rem"
          fontWeight={600}
        >
          {label}
        </FormLabel>
      )}
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        isDisabled={disabled}
        width={width}
        height={
          variant === "primary"
            ? "2.5rem"
            : variant === "secondary"
              ? "2rem"
              : "2rem"
        }
        bg={
          variant === "primary"
            ? "#F4F4F4"
            : variant === "secondary"
              ? "white"
              : variant === "tertiary"
                ? "transparent"
                : "white"
        }
        color={
          variant === "primary"
            ? "typography.text-primary"
            : variant === "secondary"
              ? "typography.dark"
              : variant === "tertiary"
                ? "white"
                : "typography.dark"
        }
        borderRadius={
          variant === "primary"
            ? ".3rem"
            : variant === "secondary"
              ? ".3rem"
              : variant === "tertiary"
                ? "0"
                : ".3rem"
        }
        fontSize="1rem"
        outline="none"
        autoSave="true"
        autoCorrect="on"
        spellCheck="true"
        isInvalid={errors?.[name]?.message ? true : false}
        errorBorderColor="red.300"
        border={
          variant === "primary"
            ? "1px solid #A5A5A5"
            : variant === "secondary"
              ? "1px solid #D4D4D4"
              : variant === "tertiary"
                ? "none"
                : "1px solid #D4D4D4"
        }
        borderBottom={variant === "tertiary" && "1px solid #D4D4D4"}
        _placeholder={{
          color:
            variant === "tertiary"
              ? "rgba(255, 255, 255, 0.66)"
              : "bg.dark-ash",
          fontSize: ".9rem",
          verticalAlign: "middle",
          fontWeight: "600",
        }}
        {...register(name, {
          required: true,
        })}
        {...props}
      />
      {errors?.[name] && (
        <FormHelperText role="alert" color={"red"} fontSize=".8rem">
          {errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default AppInput;
