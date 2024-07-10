import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./page";

const App = () => {
  return (
    <div className="h-screen ">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
