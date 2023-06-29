import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Square from "./Frontend/Login";
import EnterPassword from "./Frontend/EnterPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Square />} />
          <Route path="/password" element={<EnterPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
