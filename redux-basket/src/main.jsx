import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { setupStore } from "./redux/store";
import { Provider } from "react-redux";

const store = setupStore();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
