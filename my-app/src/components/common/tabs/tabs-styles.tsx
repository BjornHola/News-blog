import styled from "styled-components";
import { type TabState } from "./tabs";

interface IStyledTabProps {
  $isActive: boolean;
  $state: TabState;
  disabled: boolean;
}

export const ButtonContainer = styled.div`
  max-width: 600px;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid green; //
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 200px;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    max-width: 400px;
  }
`;

export const ButtonTab = styled.button<IStyledTabProps>`
  background-color: rgba(255, 255, 255, 0.87);
  width: 190px;
  height: 40px;
  padding: 20px;
  font-size: 15px;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? "2px solid #4d4d50" : "2px solid transparent")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ $isActive, $state, disabled, theme }) => {
    switch (true) {
      case disabled:
        return theme.mode === "dark" ? "#fff" : "#6b6a6e4d";
      case $isActive:
        return theme.mode === "dark" ? "#fff" : "#313037";
      case $state === "hover":
        return theme.mode === "dark" ? "#7b79c0" : "#6C1BDB";
      case $state === "default":
        return theme.mode === "dark" ? "#fff" : "#313037";
      default:
        return "rgba(42, 40, 40, 0.147)";
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media screen and (min-width: 1200px) {
    &:hover {
      color: ${({ disabled }) => (!disabled ? "#9b9bab" : undefined)};
    }
  }
`;
