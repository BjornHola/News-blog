import { useState, type ChangeEvent, type FC } from "react";
import { SearchForm } from "./search-form";
import { SearchButton } from "./search-icon";
import { StyledButtonClose, StyledOverlay } from "./search-component-styles";
import { useIsMobile } from "../../../utils/hooks/resizeWindow";

export const SearchComponent: FC<{ onSearchSubmit: (value: string) => void }> = ({
  onSearchSubmit,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenOverlay, setOpenOverlay] = useState(false);
  const isMobileVersion = useIsMobile(768);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) {
      onSearchSubmit(searchValue.trim());
      setIsActive(false);
      setOpenOverlay(false);
      setSearchValue("");
    }
    console.log("Submit!", searchValue); //
  };

  return (
    <>
      {!isMobileVersion ? (
        // DESKTOP
        isActive ? (
          <>
            <form onSubmit={handleSubmit}>
              <SearchForm
                placeholder="Search"
                type="search"
                name="search"
                value={searchValue}
                onChange={handleChange}
              />
              <StyledButtonClose type="button" onClick={() => setIsActive(false)}>
                x
              </StyledButtonClose>
            </form>
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
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleChange}
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                />
              </form>
            </StyledOverlay>
          )}
        </>
      )}
    </>
  );
};
