import { type FC, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ButtonContainer, ButtonTab } from "./tabs-styles";

export type TabState = "default" | "hover" | "disabled";

export interface ITabsProps {
  labels: Array<string>;
  state: TabState;
  onTabChange?: (index: number) => void;
}

export const Tab: FC<ITabsProps> = ({ labels, state = "default", onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const navigate = useNavigate();

  const handleWithClickOnTab = (index: number) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
    // navigate(`/v4/articles/tab/${labels[index]}`);
  };

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
          onClick={() => handleWithClickOnTab(index)}
        >
          {label}
        </ButtonTab>
      ))}
    </ButtonContainer>
  );
};
