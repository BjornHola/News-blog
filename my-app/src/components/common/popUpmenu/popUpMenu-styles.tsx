import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: hidden;
`;

export const MenuPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: white;
  color: black;
  z-index: 1100;
  padding: 1rem;
  overflow-y: auto;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  opacity: 1;
  color: black;
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;
