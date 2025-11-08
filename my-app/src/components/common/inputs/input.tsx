import { type FC, useState, type ChangeEvent, type FocusEvent } from "react";
import { WrapperForInput } from "./input-styles";

type InputState = "default" | "focus" | "filled" | "disabled" | "error";
type InputTypes = "text" | "email" | "password";

interface IInputProps {
  label?: string;
  dataState: InputState;
  placeholder?: string;
  value?: string;
  type: InputTypes;
  id?: "Username" | "Email" | "Password";
  form?: string;
  autocomplete: "Username" | "Email" | "Password" | "on" | "off";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
  label,
  dataState,
  placeholder,
  value = "",
  type,
  id,
  form,
  autocomplete,
  onChange,
  onBlur,
}) => {
  const [isFocused, setFocus] = useState(false);
  const handleWIthFocus = () => {
    setFocus((isFocused) => !isFocused);
  };

  const handleWithBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(e);
  };
  const isError = dataState === "error";
  const isDisabled = dataState === "disabled";
  const isFilled = dataState === "filled";

  const defineState = (): InputState => {
    if (isError) {
      return "error";
    } else if (isDisabled) {
      return "disabled";
    } else if (isFocused) {
      return "focus";
    } else if (isFilled || (value && value.length > 0)) {
      return "filled";
    } else return "default";
  };

  const currentState = defineState();

  const inputId = id || (label ? label.replace(/\s+/g, "_") : undefined);

  return (
    <WrapperForInput>
      <label htmlFor={inputId}> {label} </label>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        id={inputId}
        value={value}
        form={form}
        onFocus={handleWIthFocus}
        onBlur={handleWithBlur}
        name={`${currentState}`}
        data-state={defineState()}
        onChange={onChange}
      ></input>
    </WrapperForInput>
  );
};
