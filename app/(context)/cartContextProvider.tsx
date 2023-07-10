"use client";
import { ReactNode, useState } from "react";
import { CartContext, ProductState } from "./cartContext";

type CartContextProviderSate = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderSate) => {
  const [cart, setCart] = useState<ProductState[]>([]);
  const addProduct = (product: ProductState) => {
   const iHateJS = [...cart]
    
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
