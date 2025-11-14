import { styled } from "styled-components";

export const DropdownButton = styled.button<{ $isFocused?: boolean; $isDisabled?: boolean }>`
  width: 100%;
  max-width: 300px;
  margin: 0;
  height: 48px;
  border-radius: 8px;
  border: ${({ $isFocused }) => ($isFocused ? "2px solid #8B63F6" : "1px solid #EEEEEE")};
  background: ${({ $isDisabled, theme }) => {
    switch (true) {
      case $isDisabled:
        return theme.mode === "dark" ? "#F0F0F0" : "#a9a5a58f";

      case !$isDisabled:
        return theme.mode === "dark" ? "#5c5858" : "#b9b7c1";

      default:
        return "#F0F0F0";
    }
  }};
  color: ${({ $isDisabled }) => ($isDisabled ? "#A9A9A9" : "#222")};
  font-size: 16px;
  padding: 0 16px;
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  transition:
    border 0.2s,
    box-shadow 0.2s;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 44px;
    font-size: 15px;
    border: none;
    box-shadow: 0 1px 10px 0 rgba(30, 30, 60, 0.05);
    background: ${({ theme }) => (theme.mode === "dark" ? "#333" : "#fafaff")};
  }

  @media screen and (min-width: 1200px) {
    &:focus {
      border: 2px solid #8b63f6;
      box-shadow: 0 0 0 2px #8b63f633;
    }
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  max-width: 300px;
  margin: 0;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 24px 0 #aeaeae26;
  border: 1px solid #eeeeee;
  font-size: 16px;
  /* min-width: 100%; */
  list-style: none;
  z-index: 10;
  /* top: 50px; */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    left: 0;
    top: 44px;
    width: 100%;
    max-width: 300px;
    font-size: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(30, 30, 60, 0.1);
  }
`;

export const DropdownOption = styled.li<{ $isActive?: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  box-sizing: border-box;
  background: ${({ $isActive }) => ($isActive ? "#F7F6FF" : "#FFF")};
  color: ${({ $isActive }) => ($isActive ? "#8B63F6" : "#222")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};

  @media screen and (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
    border-radius: 8px;
    background: ${({ $isActive }) => ($isActive ? "#efebff" : "#fff")};
    color: ${({ $isActive }) => ($isActive ? "#7e53ef" : "#292323")};

    &:active {
      background: #e3ddfa;
      color: #7e53ef;
    }
  }

  @media screen and (min-width: 1200px) {
    &:hover {
      background: #f7f6ff;
      color: #8b63f6;
    }
  }
`;
