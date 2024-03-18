import React from "react";
import SelectForm from "./components/SelectForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Headers from "./components/Headers";

const App = () => {
  return (
    <div className="max-w-[700px] mx-auto min-h-screen flex flex-col">
     <Headers/>
      <SelectForm />
      <RecordTable />
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;
