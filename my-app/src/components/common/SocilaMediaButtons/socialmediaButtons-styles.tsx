import styled from "styled-components";

export const SocialMediaBlock = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 0 12px;
  transition: all 0.3s ease;

  button {
    padding: 0.35em 0.75em;
  }

  button:active {
    border: 3px solid #9c65e88d;
  }

  button:focus {
    border: 3px solid #9c65e88d;
  }

  button:disabled {
    background: #aaa9a9;
    color: #827c7c;
  }

  @media screen and (min-width: 1200px) {
    button:hover {
      border: 2px solid #7b79c0;
    }
  }
`;
