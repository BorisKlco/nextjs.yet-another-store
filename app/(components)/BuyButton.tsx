"use client";

type BuyButtonProp = {
  url: string;
};

const handleBuyButton = (id: string) => {
  console.log(id);
};

const BuyButton = ({ url }: BuyButtonProp) => {
  return (
    <button
      onClick={() => handleBuyButton(url)}
      className="py-4 mb-2 font-bold text-xl border-none bg-blue-300 rounded text-white
            transition duration-300 hover:bg-blue-400 hover:scale-[1.01] hover:drop-shadow-sm
            "
    >
      Add to Cart
    </button>
  );
};

export default BuyButton;
