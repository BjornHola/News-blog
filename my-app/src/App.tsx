import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { ThemeProvider } from "./context";
import { MainPage } from "./pages/mainPage/index-main-page";
import { Provider } from "react-redux";
import { store } from "./core/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Fragment>
          <MainPage />
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
