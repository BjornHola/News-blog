import styled from "styled-components";

export const WrapperForSignIn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    max-width: 600px;
  }

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
  flex-direction: column;
  min-width: 100%;
  flex: 1;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 16px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

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
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
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
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  padding-top: 50px;
  margin-top: 50px;

  /* @media (max-width: 600px) {
    padding: 12px 6px;
    gap: 6px;
  } */

  & button {
    margin: 0;
    font-size: 15px;
    border: none;
    background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
    color: ${({ theme }) => (theme.mode === "dark" ? "#a39b9bc0" : "#484242e7")};
  }
`;
