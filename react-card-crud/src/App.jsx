import React, { useContext } from "react";
import Layer from "./components/Layer";
import Header from "./components/Header";
import ProductGroup from "./components/ProductGroup";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";
import Drawer from "./components/Drawer";
import { dataContext } from "./contexts/DataContext";

const App = () => {
  const {cartDrawer} = useContext(dataContext);
  return (
    <Layer>
      <Header />
      <Spacer size={100} />
      <Categories />
      <ProductGroup />
      <Footer />
      {cartDrawer && <Drawer />}
    </Layer>
  );
};

export default App;
