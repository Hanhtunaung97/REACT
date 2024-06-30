import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ContactAddPage,
  ContactDetailPage,
  ContactPage,
  HomePages,
  LoginPages,
  RegisterPages,
} from "./pages";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/home" element={<HomePages />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
          <Route path="contact/:id" element={<ContactDetailPage/>}/>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
