import styled from "styled-components";

export const WrapperForGuestPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #e2e2f0;
  color: black;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
// I
export const NavigationSection = styled.div`
  width: 100%;
  max-width: 140px;
  flex-shrink: 1;
  background: #f2f2f7;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }
`;
// I
export const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
// II
export const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 920px;
  margin: 0 auto 40px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 100%;
    place-items: center;
  }
`;
// III
export const SectionCard = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 320px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(100, 100, 115, 0.1);
  padding: 34px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 240px;
    padding: 20px 10px;
  }
`;
// IV
export const ImageBlock = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 12px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
// IV
export const TextBlock = styled.div`
  width: 100%;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

// II
export const Footer = styled.footer`
  width: 100%;
  background: #e5e5ed;
  color: #21213b;
  text-align: center;
  padding: 18px 0;
  font-size: 16px;
  letter-spacing: 0.5px;
  box-shadow: 0 -2px 24px 0 rgba(120, 120, 146, 0.06);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 12px 0;
  }
`;
