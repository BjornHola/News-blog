import { styled } from "styled-components";

export const SearchForm = styled.input`
  width: 220px;
  height: 40px;
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(46, 46, 240, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;
