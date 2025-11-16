import { styled } from "styled-components";

export const StyledWrapperExtended = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const TitleBlock = styled.h3`
  width: 100%;
  max-width: 1130px;
  padding: 0 10px;
  font-family: Inter;
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  letter-spacing: 0;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  box-sizing: border-box;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 760px;
    font-size: 29px;
    line-height: 44px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 32px;
    line-height: 50px;
  }
`;

export const ExtendedImageDiv = styled.div`
  display: block;
  flex: 1 1 auto;
  max-width: 1120px;
  height: auto;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  cursor: pointer;
  box-sizing: border-box;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 760px;
    flex: 0 1 auto;
    padding: 0 5px;
  }

  @media screen and (min-width: 769px) and (max-width: 1030px) {
    padding: 0 7px;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ContentContainer = styled.p`
  display: block;
  padding: 0 10px;
  font-family: Inter;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  max-width: 1130px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  box-sizing: border-box;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 15px 20px;
  }
`;
