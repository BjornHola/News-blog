import { styled } from "styled-components";

export const WrapperForSinglePostPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 1200px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const WrapperForSocialMedia = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 20px 20px;
  display: flex;
  justify-content: flex-start;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

//pagination
export const MediumPostsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 20px;
  flex-wrap: wrap;
  flex: 1 1 auto;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 760px) {
    flex-wrap: nowrap;
    max-width: 1200px;
    gap: 20px;
    padding: 20px;
  }

  @media screen and (min-width: 1201px) {
    max-width: 1500px;
    padding: 10px;
    gap: 5px 5px;
  }
`;
