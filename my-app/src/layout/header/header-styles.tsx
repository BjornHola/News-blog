import { styled } from "styled-components";

export const WrapperForHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  color: #161010;
  position: relative;
  overflow: hidden;
  height: auto;
  min-height: 90px;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #ffffff; //
  color: #161010;
  max-height: 90px;
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-height: 90px;
`;
