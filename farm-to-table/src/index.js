import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import InfoProvider from "./Context/InfoContext";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css'


ReactDOM.render(
  <BrowserRouter>
    <InfoProvider>
      <App/>
    </InfoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

//Take a rook at me now. Take a rook at me noooooooowww
