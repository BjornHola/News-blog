import { styled } from "styled-components";

export const WrapperForTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  border: 2px solid orange; //
`;

export const Headline = styled.h1<{ backgroundColor?: string; color?: string }>`
  display: inline-block;
  margin: 20px 20px;
  font-weight: 900;
  line-height: normal;
  font-size: 32px;
  text-transform: capitalize;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
`;
