import { styled } from "styled-components";

export const InputForSearch = styled.input`
  width: 280px;
  height: 40px;
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f7f2f2;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(87, 87, 168, 0.3);
  }

  &::placeholder {
    color: #6b6363;
    font-family: "Inter", sans-serif;
  }
`;
