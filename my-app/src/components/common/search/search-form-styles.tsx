import { styled } from "styled-components";

export const InputForSearch = styled.input`
  width: 280px;
  height: 40px;
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  background: ${({ theme }) => (theme.mode === "dark" ? "#8d878715" : "#f7f2f2")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#333")};
  transition: all 0.3s ease;
  flex-shrink: 1;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(87, 87, 168, 0.3);
  }

  &::placeholder {
    color: #6b6363;
    font-family: "Inter", sans-serif;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
    width: 480px;

    &:hover {
      order: 2px solid rgb(80, 66, 140);
      box-shadow: 0 0 3px rgba(36, 36, 57, 0.3);
    }
  }
`;
