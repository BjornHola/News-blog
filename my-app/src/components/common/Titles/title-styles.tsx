import { styled } from "styled-components";

export const WrapperForTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Headline = styled.h1<{ backgroundColor?: string; color?: string }>`
  display: inline-block;
  margin: 20px 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "rgba(255, 255, 255, 0.87)"
      ? "rgba(255, 255, 255, 0.87)"
      : "#2d1e1e"}; // затычка для темы
  color: ${({ color }) => (color === "#100f0f" ? "#100f0f" : "#f5f5f5")}; // затычка для темы
  font-weight: 900;
  line-height: normal;
  font-size: 26px;
  text-transform: capitalize;
`;
