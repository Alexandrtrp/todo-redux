import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { App } from "./App.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
