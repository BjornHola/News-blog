import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 50px auto 0;
  padding: 50px 130px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 500px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#504d4d33" : "#b9b2b250")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  flex: 1;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 270px;
    margin: 20px auto;
    padding: 0 10px;
  }

  @media screen and (max-width: 1200px) {
    width: 90vw;
    margin: 20px auto;
    padding: 15px 10px;
  }
`;

export const ResetLink = styled.p`
  padding-left: 60px;
  align-self: flex-start;
  color: #77757a;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  font-size: 13px;
`;

export const TextUnderForm = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  color: #77757a;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
`;

export const StyledLink = styled.p`
  color: #3f3f9c;
  cursor: pointer;
  font-weight: 700;
`;
