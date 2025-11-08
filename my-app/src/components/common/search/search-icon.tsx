import { SearchIconWrapper } from "./search-icon-styles";
import { type FC } from "react";

const SearchIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
        stroke="#313037"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20L16 16"
        stroke="#313037"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <SearchIconWrapper onClick={onClick} aria-label="Search">
      <SearchIcon />
    </SearchIconWrapper>
  );
};
