import { type FC } from "react";
import { TitleNotFound, WrapperForNotFound } from "./notFoundPage-styles";

export const NotFoundPage: FC = () => {
  return (
    <>
      <WrapperForNotFound>
        <TitleNotFound>PAGE not FOUND 404</TitleNotFound>
      </WrapperForNotFound>
    </>
  );
};
