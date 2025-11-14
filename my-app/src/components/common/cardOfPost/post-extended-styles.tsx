import { styled } from "styled-components";

export const StyledWrapperExtended = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const TitleBlock = styled.h3`
  font-family: Inter;
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  letter-spacing: 0;
  color: black;
  max-width: 1130px;
`;

export const ExtendedImageDiv = styled.div`
  display: block;
  flex: 1 1 auto;
  max-width: 1120px;

  & img {
    object-fit: cover;
  }
`;

export const ContentContainer = styled.p`
  display: block;
  font-family: Inter;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  color: black;
  text-align: left;
  max-width: 1130px;
`;
