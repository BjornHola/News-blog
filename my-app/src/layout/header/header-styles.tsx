import { styled } from "styled-components";

export const WrapperForHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#b9b2b250")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  box-sizing: border-box;
  color: #161010;
  overflow-x: hidden;
  height: auto;
  min-height: 90px;
  border: 2px solid red; //

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    justify-content: space-around;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding: 20px 20px;
    justify-content: space-between;
  }
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: none;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  max-height: 90px;
  border: none;
  flex: 0 1 auto;
  min-width: 0;
  border: 2px solid red; //

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    max-width: 100px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    padding-right: 25px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding-left: 10px;
  }
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-height: 90px;
  background: none;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  border: none;
  padding-right: 20px;
  flex: 0 1 auto;
  min-width: 0;
  border: 2px solid red; //
  /* padding-right: clamp(20px, 5vw, 60px); */

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    padding-right: 25px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    padding-right: 70px;
    margin-right: 20px;
  }
`;
