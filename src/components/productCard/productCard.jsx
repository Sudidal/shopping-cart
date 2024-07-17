import classes from "./productCard.module.css";
import { addItemToCart, removeItemFromCart, getItemFromCart } from "../../cart";
import { useRef } from "react";

function ProductCard({ product, onChange }) {
  const ref = useRef();

  return (
    <div className={classes.card}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}$</p>
      <input defaultValue={1} ref={ref} type="number" placeholder="quantity" />
      {getItemFromCart(product.id) ? (
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            onChange();
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product.id, ref.current.value);
            onChange();
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
