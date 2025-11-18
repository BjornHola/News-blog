import styled from "styled-components";

export const WrapperForSearchPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow-x: hidden;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 1200px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

//newsblock = resultblock
export const ResultsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
  box-sizing: border-box;
  gap: 8px 8px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 769px) {
    flex: 0 1 auto;
  }

  @media screen and (min-width: 1201px) {
    max-width: 1480px;
    padding: 10px;
  }
`;
