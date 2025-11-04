import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { Button } from "./components/common/Buttons/button-index";
import { ButtonAccount } from "./components/common/Buttons-Account/index-button-account";

function App() {
  return (
    <Fragment>
      <ButtonAccount label="Artem Malkin" type="button" onClick={() => console.log("Hello")} />
      <Button
        onClick={() => console.log("Hello")}
        label="Primary"
        dataState="default"
        variant="primary"
        tabIndex={1}
        type="button"
      />
      <Button
        onClick={() => console.log("Hello")}
        label="Secondary"
        dataState="default"
        variant="secondary"
        tabIndex={1}
        type="button"
      />
    </Fragment>
  );
}

export default App;
