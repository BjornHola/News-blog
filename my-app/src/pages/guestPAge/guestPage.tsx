import type { FC } from "react";
import { ButtonMenu } from "../../components/common/Button-menu/button-menu-index";
import { WrapperForGuestPage } from "./guest-page-styles";

export const GuestPage: FC = () => {
  return (
    <WrapperForGuestPage>
      <ButtonMenu />
    </WrapperForGuestPage>
  );
};
