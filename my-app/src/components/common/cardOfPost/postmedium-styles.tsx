import { styled } from "styled-components";

export const StyledWrapperMedium = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  border-radius: 8px;
  box-sizing: border-box;
  overflow-x: hidden;
  border: 2px solid red; //

  @media screen and (min-width: 320px) and (amx-width: 768px) {
    max-width: 400px;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(107, 81, 226, 0.368);
    z-index: 2;
    pointer-events: none;
  }

  @media screen and (min-width: 320px) and (amx-width: 768px) {
    max-width: 500px;
  }

  @media screen and (min-width: 769px) {
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
    height: auto;
    object-fit: cover;
    border-radius: 6px;
    background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
    border: 2px solid blue; //
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
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#FFFFFF")};
`;
