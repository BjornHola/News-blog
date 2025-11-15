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

export const SocialMediaBlock = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 0 12px;
  transition: all 0.3s ease;

  button {
    padding: 0.35em 0.75em;
  }

  button:active {
    border: 3px solid #9c65e88d;
  }

  button:focus {
    border: 3px solid #9c65e88d;
  }

  button:disabled {
    background: #aaa9a9;
    color: #827c7c;
  }

  @media screen and (min-width: 1200px) {
    button:hover {
      border: 2px solid #7b79c0;
    }
  }
`;

//pagination
export const MediumPostsBlock = styled.div`
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
    max-width: 1200px;
  }

  @media screen and (min-width: 1201px) {
    max-width: 1500px;
    padding: 10px;
  }
`;
