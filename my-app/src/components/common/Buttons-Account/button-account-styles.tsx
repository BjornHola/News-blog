import styled from "styled-components";

export const ButtonAccountNamed = styled.button`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  padding: 5px 10px;
  margin: 10px;
  width: 170px;
  height: 60px;
  background-color: rgba(77, 10, 199, 1);
  box-sizing: border-box;

  span:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: rgba(108, 27, 219, 1);
    border-radius: 3px;
    color: rgb(255, 255, 255);
    font-family: "Inter";
    font-weight: bold;
    font-size: 15px;
    line-height: normal;
    text-align: center;
    box-sizing: border-box;
  }
  span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    background-color: rgb(255, 255, 255);
    color: rgba(49, 48, 55, 1);
    font-family: "Inter";
    font-weight: bold;
    font-size: 15px;
    line-height: normal;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 3px 3px #4006ab;
  }
  &:active {
    outline: 1px solid #4006ab;
    outline-offset: 1px;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: #717079;
  }

  &:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

export const ButtonAccountNamedMobile = styled.button`
  display: block;
  padding: 10px 10px;
  margin: 10px auto;
  width: 130px;
  height: 60px;
  background-color: rgba(77, 10, 199, 1);
  box-sizing: border-box;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  box-sizing: border-box;

  &[disabled] {
    background-color: #717079;
  }
  &:active {
    outline: 1px solid #4006ab;
    outline-offset: 1px;
  }

  @media screen and (min-width: 1200px) {
    flex-shrink: 1;
    min-width: 0;
  }
`;
