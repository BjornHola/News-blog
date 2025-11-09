import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#b9b2b250")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#a5a6a9ca" : "#8d8e97")};

  /* @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    padding: 12px 6px;
    gap: 6px;
  }
  @media screen and (min-width: 769px) {
    padding-right: 20px;
    padding-left: 20px;
  } */
`;
export const YearParagraph = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  padding: 0 0 0 30px;

  /* @media (max-width: 600px) {
    padding-left: 6px;
    padding-right: 6px;
  }

  @media screen and (min-width: 769px) {
    padding-left: 50px;
  } */
`;

export const ThemeButtonSection = styled.div`
  padding: 0 30px 0 0;

  & h5 {
    color: inherit;
  }

  /* @media screen and (max-width: 600px) {
    padding-left: 6px;
    padding-right: 6px;
  }

  @media screen and (min-width: 769px) {
    padding-right: 50px;
  } */
`;
