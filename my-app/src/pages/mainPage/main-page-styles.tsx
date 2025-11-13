import { styled } from "styled-components";

export const WrapperForMainPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid red; //
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 1200px) {
    max-width: 1900px;
    margin: 0 auto;
  }
`;

export const WrapperForTitleTabs = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 320px) and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    align-items: flex-start;
  }
`;

export const SectionButtonSort = styled.div`
  width: 1005;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid blue; //
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid blue; //
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
`;

export const SelectBlock = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid blue; //
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
`;

export const NewsBlock = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
  box-sizing: border-box;
  border: 2px solid pink; //
  gap: 5px 5px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 769px) {
    flex: 0 1 auto;
  }

  @media screen and (min-width: 1201px) {
    max-width: 1500px;
    padding: 10px;
  }
`;
