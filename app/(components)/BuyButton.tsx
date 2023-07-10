"use client";

import { useCartContext } from "../(context)/cartContext";

type BuyButtonProp = {
  url: string;
  price: number;
};

const BuyButton = ({ url, price }: BuyButtonProp) => {
  const { cart, addProduct } = useCartContext();
  const product = url;
  const addItem = () => {
    addProduct({ product });
  };

  return (
    <button
      onClick={addItem}
      className="py-4 mb-2 font-bold text-xl border-none bg-blue-300 rounded text-white
            transition duration-300 hover:bg-blue-400 hover:scale-[1.01] hover:drop-shadow-sm
            "
    >
      Add to Cart
    </button>
  );
};

export default BuyButton;
