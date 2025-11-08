import { type FC, type MouseEvent } from "react";
import { AuthenticationButton } from "./button-auth-styles";
import userIcon from "../../../assets/Man-outline-button-account.png";

export const AuthButton: FC<{ onClick?: (e: MouseEvent<HTMLButtonElement>) => void }> = ({
  onClick,
}) => {
  return (
    <AuthenticationButton onClick={onClick}>
      <img src={userIcon} alt="user icon" width="20" height="20" />
    </AuthenticationButton>
  );
};
