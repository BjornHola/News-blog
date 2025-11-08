import { styled } from "styled-components";

export const WrapperForInput = styled.div`
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  label {
    color: #313037;
    font-size: 16px;
    line-height: normal;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  input {
    width: 300px;
    height: 40px;
    background-color: rgb(255, 255, 255);
    color: #454242;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 8px;
    border: 1px solid #ccc;
    transition: all 0.2s ease;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 230px;
    }
  }

  input[data-state="focus"] {
    border: 2px solid rgb(80, 66, 140); //
    color: #baafaf;
  }

  input:hover {
    border: 2px solid rgb(80, 66, 140); //
    color: #baafaf;
  }

  input:active {
    background-color: rgb(255, 255, 255); //
    font-size: 13px;
    color: #2c2929;
    border: 1px solid #ccc;
  }

  input[data-state="disabled"] {
    background-color: #f3ebeb; //
    color: #3130374d;
    opacity: 0.8;
    cursor: not-allowed;
    border: none;
  }

  input[data-state="error"] {
    border: 2px solid #b00020;
    background-color: #f3e6e6; //
    color: #313037;
  }

  input[data-state="filled"] {
    background-color: #f5f5f5; //
    border: 1px solid #999;
  }
`;
