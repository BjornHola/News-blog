import styled from "styled-components";
import { type TabState } from "./tabs";

interface IStyledTabProps {
  $isActive: boolean;
  $state: TabState;
  disabled: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 20px auto;
  padding: 20px;
`;

export const ButtonTab = styled.button<IStyledTabProps>`
  background-color: rgba(255, 255, 255, 0.87);
  width: 190px;
  height: 40px;
  padding: 20px;
  font-size: 15px;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? "2px solid #050606" : "2px solid transparent")};
  color: ${({ $isActive, $state, disabled }) => {
    switch (true) {
      case disabled:
        return "#6b6a6e4d";
      case $isActive:
        return "#313037";
      case $state === "hover":
        return "#6C1BDB";
      case $state === "default":
        return "#313037";
      default:
        return "rgba(0, 0, 0, 0.866)";
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${({ disabled }) => (!disabled ? "#9b9bab" : undefined)};
  }
`;
