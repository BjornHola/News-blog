import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { Button } from "./components/common/Buttons/button-index";
import { ButtonAccount } from "./components/common/Buttons-Account/index-button-account";
import { ButtonSwitch } from "./components/common/Button-switch/button-switch-index";
import { ButtonMenu } from "./components/common/Button-menu/button-menu-index";
import { Tab } from "./components/common/tabs/tabs";

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
      <ButtonSwitch role="switch" ariaChecked="true" label="Off/On" />
      <ButtonMenu />
      <Tab
        labels={["Articles", "News"]}
        state="default"
        onTabChange={(index) => console.log("Active tab:", index)}
      />
    </Fragment>
  );
}

export default App;
