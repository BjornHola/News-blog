import { useState, type ChangeEvent, type FC } from "react";
import { SearchForm } from "./search-form";
import { SearchButton } from "./search-icon";

export const SearchComponent: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {isActive ? (
        <>
          <SearchForm
            placeholder="Search"
            type="search"
            name="search"
            value={searchValue}
            onChange={onSearchChange}
          />
          <button onClick={() => setIsActive(false)}>✕</button>
        </>
      ) : (
        <SearchButton onClick={() => setIsActive(true)} />
      )}
    </>
  );
};
