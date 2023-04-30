import React from "react";
import ReactDOM from "react-dom/client";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { ConfigProvider } from "antd";
import App from "./App";

// import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
