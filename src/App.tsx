import React from "react";
import "./App.css";
import { Header } from "@shared/components/header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@shared/components/app-routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
