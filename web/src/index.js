import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "core";

const store = configureStore({
  reducer: rootReducer,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
