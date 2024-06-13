import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage, BlogPage, DashboardPage, DetailBookPage, HomePage, InventoryPage, UserPage } from "./page";
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
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
        <Route index element={<InventoryPage/>}/>
        <Route path="blog" element={<BlogPage/>}/>
        <Route path="user" element={<UserPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
