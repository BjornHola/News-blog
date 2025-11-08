import styled from "styled-components";

export const SearchIconWrapper = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(46, 46, 240, 0.15);
  }
`;
