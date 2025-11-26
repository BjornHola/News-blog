import { type FC, useState } from "react";
import { SortingButton } from "./sortButton-styles";

export type SortButtonState = "default" | "hover" | "disabled";

export interface ISortButtonProps {
  labels: Array<string>;
  state: SortButtonState;
  onClick?: (index: number | null) => void;
  tabIndex?: number;
}

export const SortButton: FC<ISortButtonProps> = ({ labels, state, onClick, tabIndex }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleWithClick = (index: number | null) => {
    setActiveIndex(index);
    if (onClick) onClick(index);
  };

  if (!labels || labels.length === 0) {
    return <div>No labels for sorting buttons provided</div>;
  }

  return (
    <>
      {labels.map((label, index) => (
        <SortingButton
          key={index}
          $state={state}
          tabIndex={tabIndex ? Number(tabIndex) : undefined}
          onClick={() => handleWithClick(index)}
          $isActive={activeIndex === index}
          disabled={state === "disabled"}
        >
          {label}
        </SortingButton>
      ))}
    </>
  );
};
