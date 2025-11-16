import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { ThemeProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index-router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Fragment>
          <RouterProvider router={router} />
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
