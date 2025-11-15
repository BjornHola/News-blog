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
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 1200px) {
    max-width: 1920px;
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 768px) and (max-width: 1152px) {
    max-width: 770px;
  }
  @media screen and (min-width: 1153px) {
    max-width: 1130px;
    justify-content: space-between;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    width: 94vw;
    max-width: 300px;
    min-width: 140px;
    border-radius: 12px;
    border: 1px solid #aaaaaa;
    box-shadow: 0 1px 10px 0 rgba(30, 30, 60, 0.07);
    margin-bottom: 8px;
    padding: 2px 0;
  }
`;

export const SelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    width: 94vw;
    max-width: 300px;
    min-width: 140px;
    border-radius: 12px;
    border: 1px solid #aaaaaa;
    box-shadow: 0 1px 10px 0 rgba(30, 30, 60, 0.07);
    margin-bottom: 8px;
    padding: 2px 0;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const NewsBlock = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
  box-sizing: border-box;
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
