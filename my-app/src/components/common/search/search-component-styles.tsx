import { styled } from "styled-components";

export const StyledButtonClose = styled.button`
  cursor: pointer;
  width: 25px;
  height: 23px;
  border: 1px solid rgba(193, 193, 205, 0.1);
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(127, 127, 179, 0.381);
  background: ${({ theme }) => (theme.mode === "dark" ? "#55287c7e" : "rgba(77, 77, 135, 0.374)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "rgba(66, 66, 148, 0.915)")};
  transition: all 0.3s ease;
  margin: 20px auto;
  padding: 0.25em 0.5em;

  &:hover {
    background-color: #754d9da1;
    box-shadow: 0 3px 3px #414186eb;
    border: 1px solid transparent;
  }

  &:active {
    background-color: #6060b1d2;
  }
  &:focus {
    outline: 1px solid #6060b1d2;
    outline-offset: 1px;
  }
  &:disable {
    background-color: rgba(49, 48, 55, 0.1);
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
    opacity: 0.7;
    color: rgba(49, 48, 55, 0.5);
    border: none;
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 120;
  background: rgba(0, 0, 0, 0.8);

  & input {
    width: 290px;
    height: 40px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.3s ease;
    background: #bbb7b733;
    color: #f7eded;
  }

  & input:focus {
    border: 3px solid #6067b4;
    outline: 1px solid #c4c5d0;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;
