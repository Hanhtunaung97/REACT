import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePages, LoginPages, RegisterPages } from "./pages";

const App = () => {
  return <main>
    <Routes>
      <Route path="/" element={<LoginPages/>}/>
      <Route path="/register" element={<RegisterPages/>}/>
      <Route path="/home" element={<HomePages/>}/>
    </Routes>
  </main>;
};

export default App;
