import { styled } from "styled-components";
import type { SortButtonState } from "./sortButton";

interface SortingButtonProps {
  $isActive?: boolean;
  disabled: boolean;
  $state: SortButtonState;
}

export const SortingButton = styled.button<SortingButtonProps>`
  display: block;
  width: 110px;
  height: 50px;
  padding: 0.25em 1em;
  border-radius: 4px;
  border: 1px solid #6b1bdb4f;
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  transition: all 0.3s ease;

  color: ${({ theme }) => (theme.mode === "dark" ? "rgb(55, 53, 100)" : "#222")};
  background: ${({ $isActive, $state, disabled, theme }) => {
    switch (true) {
      case disabled:
        return theme.mode === "dark" ? "#84818198" : "#6b6a6e4d";
      case $isActive:
        return theme.mode === "dark" ? "#fff" : "#6C1BDB";
      case $state === "hover":
        return theme.mode === "dark" ? "#7b79c0" : "#9c65e88d";
      case $state === "default":
        return theme.mode === "dark" ? "#5c5858" : "#b9b7c1";
      default:
        return "rgba(64, 62, 62, 0.147)";
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
