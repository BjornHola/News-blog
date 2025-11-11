import { styled } from "styled-components";

export const WrapperForInput = styled.div`
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  label {
    color: ${({ theme }) => (theme.mode === "dark" ? "#c4b7b7e1" : "#313037")};
    font-size: 20px;
    line-height: normal;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }

  input {
    width: 300px;
    height: 40px;
    background: ${({ theme }) => (theme.mode === "dark" ? "#827b7b33" : "rgb(255, 255, 255)")};
    color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 8px;
    border: 1px solid #ccc;
    transition: all 0.2s ease;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 250px;
    }
    @media screen and (min-width: 1201px) {
      width: 350px;
    }
  }

  input[data-state="focus"] {
    border: 2px solid rgb(80, 66, 140);
    color: #baafaf;
  }

  input:hover {
    border: 2px solid rgb(80, 66, 140);
    color: #baafaf;
  }

  input:active {
    background-color: rgb(255, 255, 255);
    font-size: 13px;
    color: #2c2929;
    border: 1px solid #ccc;
  }

  input[data-state="disabled"] {
    background-color: #f3ebeb;
    color: #3130374d;
    opacity: 0.8;
    cursor: not-allowed;
    border: none;
  }

  input[data-state="error"] {
    border: 2px solid #b00020;
    background-color: #f3e6e6;
    color: #313037;
  }

  input[data-state="filled"] {
    background-color: ${({ theme }) => (theme.mode === "dark" ? "#e8dede33" : "#f5f5f5")};
    border: 1px solid #999;
  }
`;
