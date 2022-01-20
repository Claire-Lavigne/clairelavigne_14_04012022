import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// Provide the Redux Store to React​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
