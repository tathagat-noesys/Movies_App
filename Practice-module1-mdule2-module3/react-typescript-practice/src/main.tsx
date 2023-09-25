import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContentApiProvider from "./Components/ContextAPI";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContentApiProvider>
      <App />
    </AuthContentApiProvider>
  </React.StrictMode>
);
