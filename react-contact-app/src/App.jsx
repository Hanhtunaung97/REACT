import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPages, RegisterPages } from "./pages";

const App = () => {
  return <main>
    <Routes>
      <Route path="/" element={<RegisterPages/>}/>
      <Route path="/login" element={<LoginPages/>}/>
    </Routes>
  </main>;
};

export default App;
