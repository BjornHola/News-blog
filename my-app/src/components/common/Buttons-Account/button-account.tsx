import type { FC, MouseEvent } from "react";
import { ButtonAccountNamed, ButtonAccountNamedMobile } from "./button-account-styles";
import { useIsMobile } from "../../../utils/hooks/resizeWindow";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/configs";

interface IButtonAccountProps {
  type?: "submit" | "button" | "reset";
  form?: string;
  label: string | null;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonAccount: FC<IButtonAccountProps> = ({ label }) => {
  const navigate = useNavigate();
  const handleWithAccountButtonClick = () => {
    navigate(PATHS.GUEST_PAGE);
  };
  const isMobile = useIsMobile(768);
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
    <ButtonAccountNamed onClick={handleWithAccountButtonClick} tabIndex={1}>
      <span>{getUserName(label)}</span>
      <span>{label}</span>
    </ButtonAccountNamed>
  ) : (
    <ButtonAccountNamedMobile onClick={handleWithAccountButtonClick}>
      {getUserName(label)}
    </ButtonAccountNamedMobile>
  );
};
