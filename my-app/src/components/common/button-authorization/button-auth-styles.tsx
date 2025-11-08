import { styled } from "styled-components";

export const AuthenticationButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid #3b3bae;
  background-color: #6c1bdb;
  color: #191414;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a3a3b9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #a5a5ac;
  }

  &:disabled {
    background-color: #e3e3f3;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
