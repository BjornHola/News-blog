import { styled } from "styled-components";

export const WrapperForSignUp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-x: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  hr {
    color: ${({ theme }) => (theme.mode === "dark" ? "#272525" : "#5e5959")};
    width: 100%;
  }

  & h1 {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 34px;
    }
  }
`;

export const WrapperForContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 2000px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    align-items: center;
  }
`;

export const WrapperForButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  align-items: flex-start;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  padding-top: 100px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  & button {
    margin: 0;
    font-size: 15px;
    border: none;
    background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
    color: ${({ theme }) => (theme.mode === "dark" ? "#a39b9bc0" : "#484242e7")};
  }
`;
