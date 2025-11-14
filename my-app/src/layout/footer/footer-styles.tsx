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
  overflow-x: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#b9b2b250")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#a5a6a9ca" : "#8d8e97")};
`;
export const YearParagraph = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  padding: 0 0 0 30px;
  border: 2px solid red; //
`;

export const ThemeButtonSection = styled.div`
  padding: 0 30px 0 0;
  border: 2px solid red; //
  & h5 {
    color: inherit;
  }
`;
