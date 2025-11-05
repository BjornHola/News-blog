import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: block;
  width: 160px;
  height: 50px;
  margin: 20px auto;
  padding: 0.25em 1em;
  border-radius: 4px;
  border: 1px solid rgba(108, 27, 219, 1);
  cursor: pointer;
  background-color: rgba(108, 27, 219, 1);
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease;

  @media screen and (min-width: 1024px) {
    &[data-state="default"]:hover {
      background-color: rgba(145, 46, 242, 1);
      box-shadow: 0 5px 5px #020243;
      border: 1px solid transparent;
    }
    &[data-state="default"]:focus {
      outline: 2px solid black;
      outline-offset: 2px;
    }
  }

  &[data-state="active"] {
    background-color: #5151d8;
  }
  &[data-state="disabled"] {
    background-color: rgba(49, 48, 55, 0.1);
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
    opacity: 0.7;
    color: rgba(49, 48, 55, 0.5);
    border: none;
  }
`;

export const SecondaryButton = styled.button`
  display: block;
  width: 160px;
  height: 50px;
  margin: 20px auto;
  padding: 0.25em 1em;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Inter", Helvetica, sans-serif;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(49, 48, 55, 1);
  border: 1px solid rgba(58, 56, 65, 0.1);
  font-weight: 600;
  background-color: rgba(58, 56, 65, 0.1);
  transition: all 0.3s ease;

  @media screen and (min-width: 1024px) {
    &[data-state="default"]:hover {
      background-color: rgba(49, 48, 55, 0.3);
      box-shadow: 0 5px 5px #494953;
      border: 1px solid transparent;
    }
    &[data-state="default"]:focus {
      outline: 2px solid black;
      outline-offset: 2px;
    }
  }

  &[data-state="active"] {
    background-color: #a3a3aa;
  }
  &[data-state="disabled"] {
    background-color: rgba(49, 48, 55, 0.1);
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
    opacity: 0.5;
    color: rgba(49, 48, 55, 0.5);
    border: none;
  }
`;
