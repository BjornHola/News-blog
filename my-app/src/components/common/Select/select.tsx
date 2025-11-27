import { useState, type FC } from "react";
import { DropdownButton, DropdownMenu, DropdownOption } from "./select-styles";

export interface ISelectProps {
  options: Array<string>;
  value: string | null;
  onChange?: (index: number, value: string) => void;
  disabled?: boolean;
  onClick?: (index: number | null) => void;
}

export const CustomDropdown: FC<ISelectProps> = ({ options, value, onChange, disabled }) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (onChange) onChange(idx, options[idx]);
    setOpen(false);
  };

  const selectedIndex = value !== null ? options.indexOf(value) : -1;

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
        Sort: {selectedIndex >= 0 ? options[selectedIndex] : options[0]}
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
