import {
  Overlay,
  MenuPopup,
  MenuHeader,
  CloseButton,
  MenuContent,
  MenuItem,
} from "./popUpMenu-styles";
import { type MouseEvent } from "react";
import { PATHS } from "../../../router/configs";
import { StyledNavLink } from "../Links/index-styled-navlink";

interface IPopupMenuProps {
  onClose: () => void;
}

export const PopupMenu = ({ onClose }: IPopupMenuProps) => {
  const handleOverlayClick = () => {
    onClose();
  };
  const handleMenuClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <MenuPopup onClick={handleMenuClick}>
        <MenuHeader>
          <CloseButton onClick={onClose}>×</CloseButton>
        </MenuHeader>
        <MenuContent>
          <StyledNavLink to={PATHS.SIGN_UP}>
            <MenuItem>Sign up</MenuItem>
          </StyledNavLink>
          <StyledNavLink to={PATHS.SIGN_IN}>
            <MenuItem>Sign In</MenuItem>
          </StyledNavLink>
          <StyledNavLink to={PATHS.HOME}>
            <MenuItem>My blog</MenuItem>
          </StyledNavLink>
        </MenuContent>
      </MenuPopup>
    </Overlay>
  );
};
