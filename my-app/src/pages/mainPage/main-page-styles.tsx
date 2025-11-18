import { styled } from "styled-components";

export const WrapperForMainPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow-x: hidden;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 1200px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const WrapperForTitleTabs = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 320px) and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    align-items: flex-start;
  }
`;

export const SectionButtonSort = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 768px) and (max-width: 1152px) {
    max-width: 770px;
  }
  @media screen and (min-width: 1153px) {
    max-width: 1130px;
    justify-content: space-between;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    width: 94vw;
    max-width: 300px;
    min-width: 140px;
    border-radius: 12px;
    border: 1px solid #aaaaaa;
    box-shadow: 0 1px 10px 0 rgba(30, 30, 60, 0.07);
    margin-bottom: 8px;
    padding: 2px 0;
  }
`;

export const SelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (max-width: 768px) {
    width: 94vw;
    max-width: 300px;
    min-width: 140px;
    border-radius: 12px;
    border: 1px solid #aaaaaa;
    box-shadow: 0 1px 10px 0 rgba(30, 30, 60, 0.07);
    margin-bottom: 8px;
    padding: 2px 0;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const NewsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
  box-sizing: border-box;
  gap: 5px 5px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};

  @media screen and (min-width: 769px) {
    flex: 0 1 auto;
  }

  @media screen and (min-width: 1201px) {
    max-width: 1500px;
    padding: 10px;
  }
`;

// error block
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    padding: 1rem 0.75rem;
  }
`;

const ErrorMessage = styled.p`
  color: #dc2626;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  max-width: 500px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
    max-width: 400px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    margin-bottom: 1rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const RetryButton = styled.button`
  background-color: #3b82f6;
  color: rgb(255, 255, 255);
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.75rem;
    font-size: 0.9375rem;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
    min-width: 100px;
    width: calc(100% - 2rem);
    max-width: 200px;
  }

  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export { ErrorContainer, RetryButton, ErrorMessage };

// Pagination styles
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  padding: 0 16px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#222" : "rgb(255, 255, 255)")};

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 8px;
    margin-top: 12px;
  }
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 6px 12px;
  min-width: 60px;
  height: 32px;
  background-color: ${({ disabled }) => (disabled ? "#aaa9a9" : "rgba(155, 154, 163, 0.5)")};
  color: ${({ disabled }) => (disabled ? "#827c7c" : "rgba(54, 54, 60, 0.953)")};
  border: none;
  border-radius: 4px;
  box-shadow: ${({ disabled }) => (disabled ? "none" : "0 0 2px #dbc9ed")};
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(155, 154, 163, 0.7);
    box-shadow: 0 2px 6px rgba(155, 154, 163, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 1px 3px rgba(155, 154, 163, 0.3);
  }

  &:focus {
    outline: 2px solid #9c65e8;
    outline-offset: 2px;
  }

  @media screen and (max-width: 768px) {
    min-width: 50px;
    height: 28px;
    font-size: 13px;
    padding: 4px 10px;
  }

  @media (hover: none) {
    &:hover {
      background-color: rgba(155, 154, 163, 0.5);
      box-shadow: 0 0 2px #dbc9ed;
    }
  }
`;

export const PageInfo = styled.span`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#100f0f")};
  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 100%;
    text-align: center;
  }
`;
