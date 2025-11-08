import { type FC, type MouseEvent } from "react";
import { TitleForSwitch, StyledButtonSwitch, SwitchWrapper } from "./button-switch-styles";

interface IButtonSwitchProps {
  role: string;
  label: string;
  ariaChecked?: boolean | "true" | "false";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const ButtonSwitch: FC<IButtonSwitchProps> = ({
  role = "switch",
  label = "Off/On",
  ariaChecked,
  onClick,
}) => {
  const handleClickMode = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  return (
    <SwitchWrapper>
      <TitleForSwitch>Dark mode</TitleForSwitch>
      <StyledButtonSwitch role={role} aria-checked={ariaChecked} onClick={handleClickMode}>
        {label}
      </StyledButtonSwitch>
    </SwitchWrapper>
  );
};
