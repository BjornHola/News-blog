import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: #776f6f;
  text-decoration: none;

  &.active {
    color: #4040788b;
    font-weight: bold;
  }
`;
