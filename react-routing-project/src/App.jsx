import React, { useEffect, useState } from "react";
import { getBookData } from "./service/bookUrl.service";
import useFetch from "./hook/useFetch";
import { Route, Routes } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "./NotFound";

const App = () => {
  // const { loading, error, data } = useFetch(getBookData, "books");
  // console.log(data);
  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
