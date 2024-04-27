import React from "react";
import "./App.css";
import MainPage from "./componets/MainPage";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
