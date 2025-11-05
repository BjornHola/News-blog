import { useState, type MouseEvent } from "react";
import { ButtnMenu } from "./button-menu-styles";
import { PopupMenu } from "../popUpmenu/index-popupmenu";

// interface IButtonMenuProps {
//   dataState?: "default" | "active";
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
// }

export function ButtonMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuOpen((prev) => {
      return !prev;
    });
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <ButtnMenu data-state={isMenuOpen ? "active" : "default"} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </ButtnMenu>
      {isMenuOpen && <PopupMenu onClose={closeMenu} />}
    </>
  );
}
// здесь только data-state - можно как пропсы в styled components к атрибуту active
