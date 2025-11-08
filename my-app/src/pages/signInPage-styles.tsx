import styled from "styled-components";

export const WrapperForSignIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    max-width: 600px;
  }

  hr {
    color: #685f5f;
    width: 100%;
  }

  & h1 {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 34px;
    }
  }
`;

export const WrapperForContent = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 16px;

  /* @media screen and (max-width: 768px) {
    max-width: 480px;
  }

  @media screen and (min-width: 769px) {
    min-width: 480px;
    max-width: 1200px;
  } */
`;

export const WrapperForHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 90px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 12px 6px;
    gap: 6px;
  }
`;

export const WrapperForButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  /* @media (max-width: 600px) {
    padding: 12px 6px;
    gap: 6px;
  } */

  & button {
    margin: 0;
  }
`;
