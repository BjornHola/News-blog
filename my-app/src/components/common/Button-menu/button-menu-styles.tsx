import { styled } from "styled-components";

export const ButtnMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 50px;
  height: 40px;
  margin: 0;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #5d5dad;
  cursor: pointer;
  background-color: #7575a6d0;
  color: rgb(15, 1, 1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1000;

  &:active {
    background-color: #6565df;
  }

  span {
    width: 25px;
    height: 3px;
    display: block;
    border-radius: 2px;
    background-color: #f6f2f2;
    transition: 0.3s;
    pointer-events: none;
  }
  &[data-state="active"] span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &[data-state="active"] span:nth-child(2) {
    opacity: 0;
  }

  &[data-state="active"] span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
  }
`;
