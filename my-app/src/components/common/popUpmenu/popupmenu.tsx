import {
  Overlay,
  MenuPopup,
  MenuHeader,
  CloseButton,
  MenuContent,
  MenuItem,
} from "./popUpMenu-styles";
import { type MouseEvent } from "react";

interface IPopupMenuProps {
  onClose: () => void;
}

export const PopupMenu = ({ onClose }: IPopupMenuProps) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
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
          <MenuItem>Home</MenuItem>

          <MenuItem>Sign In</MenuItem>

          <MenuItem>My blog</MenuItem>
        </MenuContent>
      </MenuPopup>
    </Overlay>
  );
};
