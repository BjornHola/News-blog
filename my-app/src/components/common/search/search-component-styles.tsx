import { styled } from "styled-components";

export const StyledButtonClose = styled.button`
  cursor: pointer;
  width: 25px;
  height: 23px;
  border: 1px solid rgba(193, 193, 205, 0.1);
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(127, 127, 179, 0.381);
  background-color: rgba(77, 77, 135, 0.374);
  color: rgba(66, 66, 148, 0.915);
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
