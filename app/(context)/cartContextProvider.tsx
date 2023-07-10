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
    cart.map((mapItem) => {
      if (mapItem.product === product.product) {
        product = { product: mapItem.product, count: mapItem.count + 1 };
        const updated = cart.filter((filteredItem) => {
          filteredItem.product != mapItem.product;
        });

        return setCart([...updated, product]);
      }
    });
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
