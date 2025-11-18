import { styled } from "styled-components";

export const StyledWrapperMedium = styled.div`
  max-width: 370px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.15),
    0 1.5px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-height: 420px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 380px;
    min-height: 440px;
  }

  @media screen and (min-width: 1200px) {
    &:hover {
      box-shadow:
        0 12px 32px rgba(0, 0, 0, 0.18),
        0 2px 8px rgba(0, 0, 0, 0.09);
    }
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(107, 81, 226, 0.368);
    z-index: 2;
    pointer-events: none;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 500px;
    aspect-ratio: 3 / 2;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    max-width: 420px;
    aspect-ratio: 16 / 10;
  }

  @media screen and (min-width: 1024px) {
    &:hover::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0);
      z-index: 2;
      pointer-events: none;
    }
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
  flex-grow: 1;
`;

export const SpanWithDate = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#31303780")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
`;

export const Headline = styled.h3`
  max-height: 84px;
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
  padding: 5px;
`;
