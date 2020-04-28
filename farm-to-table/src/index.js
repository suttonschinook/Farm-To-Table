import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProduceProvider from "./Context/ProduceContext";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <BrowserRouter>
    <ProduceProvider>
      <App/>
    </ProduceProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

//Take a rook at me now. Take a rook at me noooooooowww
