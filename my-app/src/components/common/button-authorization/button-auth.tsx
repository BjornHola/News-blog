import { type FC, type MouseEvent } from "react";
import { AuthenticationButton } from "./button-auth-styles";
import userIcon from "../../../assets/Man-outline-button-account.png";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/configs";

export const AuthButton: FC<{ onClick?: (e: MouseEvent<HTMLButtonElement>) => void }> = () => {
  const navigate = useNavigate();
  const HandleWithClickAuth = () => {
    navigate(PATHS.MAIN_PAGE);
  };

  return (
    <AuthenticationButton onClick={HandleWithClickAuth}>
      <img src={userIcon} alt="user icon" width="20" height="20" />
    </AuthenticationButton>
  );
};
