import type { FC, MouseEvent } from "react";
import { ButtonAccountNamed, ButtonAccountNamedMobile } from "./button-account-styles";
import { useIsMobile } from "../../../utils/hooks/resizeWindow";

interface IButtonAccountProps {
  type?: "submit" | "button" | "reset";
  form?: string;
  label: string | null;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonAccount: FC<IButtonAccountProps> = ({ label, onClick }) => {
  const isMobile = useIsMobile(767);
  if (!label) return "defaultUser";
  function getUserName(label: string) {
    const initials: string = label
      .split(" ")
      .map((item) => item[0])
      .join("")
      .toUpperCase();

    return initials || null;
  }

  return !isMobile ? (
    <ButtonAccountNamed onClick={onClick} tabIndex={1}>
      <span>{getUserName(label)}</span>
      <span>{label}</span>
    </ButtonAccountNamed>
  ) : (
    <ButtonAccountNamedMobile onClick={onClick}>{getUserName(label)}</ButtonAccountNamedMobile>
  );
};
