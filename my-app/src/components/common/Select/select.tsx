import { useState, type FC } from "react";
import { DropdownButton, DropdownMenu, DropdownOption } from "./select-styles";

export interface ISelectProps {
  options: Array<string>;
  value: string;
  onChange?: (index: number, value: string) => void;
  disabled?: boolean;
}

export const CustomDropdown: FC<ISelectProps> = ({ options, value, onChange, disabled }) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (onChange) onChange(idx, options[idx]);
    setOpen(false);
  };

  const selectedIndex = options.indexOf(value);

  return (
    <>
      <DropdownButton
        $isFocused={open}
        $isDisabled={disabled}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        tabIndex={0}
        type="button"
      >
        Sort: {options[selectedIndex] || options[0]}
      </DropdownButton>
      {open && !disabled && (
        <DropdownMenu>
          {options.map((opt, idx) => (
            <DropdownOption
              key={opt}
              $isActive={idx === selectedIndex}
              onClick={() => handleOptionClick(idx)}
            >
              {opt}
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </>
  );
};
