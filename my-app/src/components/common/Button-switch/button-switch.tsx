import { type FC, type MouseEvent } from "react";
import { TitleForSwitch, StyledButtonSwitch, SwitchWrapper } from "./button-switch-styles";

interface IButtonSwitchProps {
  role: string;
  label: string;
  ariaChecked: boolean | "true" | "false";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const ButtonSwitch: FC<IButtonSwitchProps> = ({
  role = "switch",
  label = "Off/On",
  ariaChecked,
  onClick,
}) => {
  return (
    <SwitchWrapper>
      <TitleForSwitch>Dark mode</TitleForSwitch>
      <StyledButtonSwitch role={role} aria-checked={ariaChecked} onClick={onClick}>
        {label}
      </StyledButtonSwitch>
    </SwitchWrapper>
  );
};
