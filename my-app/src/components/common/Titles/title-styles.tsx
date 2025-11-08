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
  background-color: #f3f3f3;
  color: #100f0f;
  font-weight: 900;
  line-height: normal;
  font-size: 32px;
  text-transform: capitalize;
`;
