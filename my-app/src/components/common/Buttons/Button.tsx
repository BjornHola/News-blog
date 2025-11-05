import type { FC, MouseEvent } from "react";
import { PrimaryButton, SecondaryButton } from "./button-styles";

interface IButtonProps {
  variant: "primary" | "secondary";
  label: string;
  dataState: "default" | "active" | "disabled";
  type?: "submit" | "button" | "reset";
  form?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
}

export const Button: FC<IButtonProps> = ({ variant, label, dataState, onClick, tabIndex }) => {
  return variant === "secondary" ? (
    <SecondaryButton
      data-state={dataState}
      onClick={onClick}
      tabIndex={tabIndex ? Number(tabIndex) : undefined}
    >
      {label}
    </SecondaryButton>
  ) : (
    <PrimaryButton
      data-state={dataState}
      onClick={onClick}
      tabIndex={tabIndex ? Number(tabIndex) : undefined}
    >
      {label}
    </PrimaryButton>
  );
};
