import { useState, type MouseEvent } from "react";
import { ButtnMenu } from "./button-menu-styles";
import { PopupMenu } from "../popUpmenu/index-popupmenu";

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
