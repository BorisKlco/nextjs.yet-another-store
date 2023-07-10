"use client";
import { useCartContext } from "../(context)/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length === 0) return <h1>Cart empty </h1>;
  return (
    <div>
      <h1>Cart:</h1>
      {cart.map((product) => (
        <CartItem
          product={product.product}
          count={product.count}
          key={product.id}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
