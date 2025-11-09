import { useContext, type FC, type MouseEvent } from "react";
import { TitleForSwitch, StyledButtonSwitch, SwitchWrapper } from "./button-switch-styles";
import { ThemeContext } from "../../../context";

interface IButtonSwitchProps {
  role: string;
  label: string;
  ariaChecked?: boolean | "true" | "false";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const ButtonSwitch: FC<IButtonSwitchProps> = ({ role = "switch", label = "Off/On" }) => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme({
      mode: theme.mode === "light" ? "dark" : "light",
    });
  };

  return (
    <SwitchWrapper>
      <TitleForSwitch>Dark mode</TitleForSwitch>
      <StyledButtonSwitch
        role={role}
        aria-checked={theme.mode === "dark" ? "true" : "false"}
        onClick={toggleTheme}
      >
        {label}
      </StyledButtonSwitch>
    </SwitchWrapper>
  );
};
