import { Logo } from "../../components/common/Blogologo/logo-index";
import { AuthButton } from "../../components/common/button-authorization/index-button-auth";
import { ButtonAccount } from "../../components/common/Buttons-Account/index-button-account";
import { SearchComponent } from "../../components/common/search/index-search";
import { WrapperForHeader, HeaderLeftContainer, HeaderRightContainer } from "./header-styles";
import { type FC } from "react";

interface IHeaderProps {
  isAuth?: boolean;
}

export const Header: FC<IHeaderProps> = ({ isAuth }) => {
  const buttonToShow = isAuth ? (
    <AuthButton />
  ) : (
    <ButtonAccount label="Artem Malkin" type="button" onClick={() => console.log("Hello")} />
  );
  return (
    <WrapperForHeader>
      <HeaderLeftContainer>
        <Logo />
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <SearchComponent />
        {buttonToShow}
      </HeaderRightContainer>
    </WrapperForHeader>
  );
};
