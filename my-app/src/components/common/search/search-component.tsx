import { useState, type ChangeEvent, type FC } from "react";
import { SearchForm } from "./search-form";
import { SearchButton } from "./search-icon";
import { StyledButtonClose, StyledOverlay } from "./search-component-styles";
import { useIsMobile } from "../../../utils/hooks/resizeWindow";

export const SearchComponent: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenOverlay, setOpenOverlay] = useState(false);
  const isMobileVersion = useIsMobile(768);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {!isMobileVersion ? (
        // DESKTOP
        isActive ? (
          <>
            <SearchForm
              placeholder="Search"
              type="search"
              name="search"
              value={searchValue}
              onChange={onSearchChange}
            />
            <StyledButtonClose onClick={() => setIsActive(false)}>x</StyledButtonClose>
          </>
        ) : (
          <SearchButton onClick={() => setIsActive(true)} />
        )
      ) : (
        // MOBILE
        <>
          <SearchButton onClick={() => setOpenOverlay(true)} />
          {isOpenOverlay && (
            <StyledOverlay onClick={() => setOpenOverlay(false)}>
              <input
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={onSearchChange}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            </StyledOverlay>
          )}
        </>
      )}
    </>
  );
};
