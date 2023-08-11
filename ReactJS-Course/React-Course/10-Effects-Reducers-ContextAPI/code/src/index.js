import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import AuthContext from "./components/store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext.Provider>
    <App />
  </AuthContext.Provider>
);
