"use client";
import { ReactNode, useState } from "react";
import { CartContext, ProductState } from "./cartContext";
import { isTemplateExpression } from "typescript";

type CartContextProviderSate = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderSate) => {
  const [cart, setCart] = useState<ProductState[]>([]);
  const addProduct = (product: ProductState) => {
    return setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
