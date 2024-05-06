import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);
  const [cartBtnInfo,setCartBtnInfo]=useState({})
  const addCarts = (newCart) => {
    setCarts([...carts, newCart]);
  };
  const deleteCarts = (id) => {
    setCarts(carts.filter((cart) => cart.id !== id));
  };
  const updateCarts = (id, addQuantity) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          const newQuantity = cart.quantity + addQuantity;
          const newCost = cart.price * newQuantity;
          return {
            ...cart,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return cart;
      })
    );
  };
  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <dataContext.Provider
      value={{ cartDrawer, toggleCartDrawer, carts, addCarts, deleteCarts ,updateCarts,cartBtnInfo,setCartBtnInfo}}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
