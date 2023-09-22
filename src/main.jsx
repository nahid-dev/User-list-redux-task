import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ContextProvider from "./contextProvider/contextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
