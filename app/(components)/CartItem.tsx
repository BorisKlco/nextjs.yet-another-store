import { ProductState } from "../(context)/cartContext";

const CartItem = ({ product, count }: ProductState) => {
  console.log(product, count);
  return (
    <div>
      {product} + {count}
    </div>
  );
};

export default CartItem;
