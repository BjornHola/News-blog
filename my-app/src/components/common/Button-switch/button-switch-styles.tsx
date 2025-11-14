import { styled } from "styled-components";

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const TitleForSwitch = styled.h5`
  display: block;
  width: fit-content;
  color: rgba(63, 62, 65, 0.3);
`;

export const StyledButtonSwitch = styled.button`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 35px;
  background-color: rgba(108, 27, 219, 1);
  border-radius: 34px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media screen and (min-width: 1200px) {
    &:hover {
      background-color: rgba(140, 139, 146, 0.3);
    }
  }

  &[aria-checked="true"] {
    background-color: rgba(108, 27, 219, 1);
  }

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 26px;
    height: 26px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  @media screen and (min-width: 1200px) {
    &::before:hover {
      background-color: #f3eaea;
    }
  }

  &[aria-checked="true"]::before {
    transform: translateX(26px);
  }

  &[aria-checked="true"][disabled] {
    background-color: #6816d9;
  }
  &[aria-checked="true"][disabled]::before {
    background-color: #4d05b2;
  }
  &[disabled] {
    background-color: rgba(139, 137, 149, 0.3);
  }
  &[disabled]::before {
    background-color: rgba(58, 57, 60, 0.3);
  }
`;
