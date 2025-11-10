import { Button } from "../../components/common/Buttons/button-index";
import { Title } from "../../components/common/Titles/title-index";
import { Form } from "../../forms/index-form";
import { Footer } from "../../layout/footer/index-footer";
import { Header } from "../../layout/header/index-header";
import { WrapperForButton, WrapperForContent, WrapperForSignUp } from "./signUp-styles";

export const SignUpPage = () => {
  return (
    <WrapperForSignUp>
      <WrapperForContent>
        <Header isAuth={true} />
        <WrapperForButton>
          <Button
            variant="secondary"
            label="Back to home"
            dataState={"default"}
            tabIndex={0}
            // onClick={clickOnButton}
          />
          <Title content={"Sign up"} />
        </WrapperForButton>
        <Form autocomplete="off" />
        <hr />
        <Footer />
      </WrapperForContent>
    </WrapperForSignUp>
  );
};
