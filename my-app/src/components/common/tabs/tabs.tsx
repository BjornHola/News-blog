import { type FC } from "react";
import { ButtonContainer, ButtonTab } from "./tabs-styles";

export type TabState = "default" | "hover" | "disabled";

export interface ITabsProps {
  labels: Array<string>;
  state: TabState;
  onTabChange?: (index: number) => void;
}

export const Tab: FC<ITabsProps & { activeIndex: number }> = ({
  labels,
  state = "default",
  onTabChange,
  activeIndex = 0,
}) => {
  if (!labels || labels.length === 0) {
    return <div>No labels for tabs provided</div>;
  }

  return (
    <ButtonContainer>
      {labels.map((label, index) => (
        <ButtonTab
          key={index}
          $isActive={index === activeIndex}
          $state={state}
          disabled={state === "disabled"}
          onClick={() => {
            if (onTabChange) onTabChange(index);
          }}
        >
          {label}
        </ButtonTab>
      ))}
    </ButtonContainer>
  );
};
