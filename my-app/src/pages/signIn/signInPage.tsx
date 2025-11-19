import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Buttons/button-index";
import { Title } from "../../components/common/Titles/title-index";
import { Form } from "../../forms/index-form";
import { Footer } from "../../layout/footer/index-footer";
import { Header } from "../../layout/header/index-header";
import { WrapperForButton, WrapperForSignIn, WrapperForContent } from "./signInPage-styles";

export const SignInPage = () => {
  const navigate = useNavigate();
  const HandleWithButtonHome = () => {
    navigate("/");
  };

  return (
    <WrapperForSignIn>
      <WrapperForContent>
        <Header isAuth={true} />
        <WrapperForButton>
          <Button
            variant="secondary"
            label="Back to home"
            dataState={"default"}
            tabIndex={0}
            onClick={HandleWithButtonHome}
          />
          <Title content={"Sign in"} />
        </WrapperForButton>
        <Form autocomplete="off" />
        <hr />
        <Footer />
      </WrapperForContent>
    </WrapperForSignIn>
  );
};
