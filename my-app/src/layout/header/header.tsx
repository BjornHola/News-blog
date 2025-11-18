import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../components/common/Blogologo/logo-index";
import { AuthButton } from "../../components/common/button-authorization/index-button-auth";
import { ButtonAccount } from "../../components/common/Buttons-Account/index-button-account";
import { SearchComponent } from "../../components/common/search/index-search";
import { WrapperForHeader, HeaderLeftContainer, HeaderRightContainer } from "./header-styles";
import { type FC } from "react";

interface IHeaderProps {
  isAuth?: boolean;
  activeTabLabel?: "articles" | "news";
}

export const Header: FC<IHeaderProps> = ({ isAuth, activeTabLabel }) => {
  const navigate = useNavigate();

  // define active tab in case of submitting search-form and transition from detailed page
  const location = useLocation();
  const tabLabel: "articles" | "news" = activeTabLabel
    ? activeTabLabel
    : location.pathname.startsWith("/articles")
      ? "articles"
      : location.pathname.startsWith("/news")
        ? "news"
        : "articles";

  // change/form search parameters
  const handleSearchSubmit = (searchValue: string) => {
    navigate(`/search/${tabLabel}/${encodeURIComponent(searchValue)}`);
  };

  const buttonToShow = isAuth ? (
    <AuthButton />
  ) : (
    <ButtonAccount label="Artem Malkin" type="button" onClick={() => console.log("Hello, Artem")} />
  );
  return (
    <WrapperForHeader>
      <HeaderLeftContainer>
        <Logo />
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <SearchComponent onSearchSubmit={handleSearchSubmit} />
        {buttonToShow}
      </HeaderRightContainer>
    </WrapperForHeader>
  );
};
