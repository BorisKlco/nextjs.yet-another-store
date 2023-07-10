import { ProductState } from "../(context)/cartContext";

const CartItem = ({ product, count }: ProductState) => {
  console.log(product, count);
  return (
    <>
      {product} + {count}
    </>
  );
};

export default CartItem;
