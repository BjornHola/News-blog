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
    background-color: rgba(108, 27, 219, 1);
    color: rgb(255, 255, 255);
    font-family: "Inter";
    font-weight: bold;
    font-size: 15px;
    line-height: normal;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      box-shadow: 0 3px 3px #4006ab;
    }

    &:focus {
      outline: 2px solid black;
      outline-offset: 2px;
    }
  }

  &:active {
    outline: 1px solid #4006ab;
    outline-offset: 1px;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: #717079;
  }
`;

export const ButtonAccountNamedMobile = styled.button`
  display: block;
  padding: 10px 10px;
  margin: 10px auto;
  width: 130px;
  height: 50px;
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
`;
