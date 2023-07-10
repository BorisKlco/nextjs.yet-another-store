import { createContext, useContext } from "react";

export type ProductState = {
  product: string;
  count?: number;
};

type CartState = {
  cart: ProductState[];
  addProduct: (item: ProductState) => void;
};

export const CartContext = createContext<CartState>({
  cart: [],
  addProduct(item) {},
});

export const useCartContext = () => useContext(CartContext);
