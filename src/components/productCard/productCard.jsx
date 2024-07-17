import classes from "./productCard.module.css";
import { addItemToCart, removeItemFromCart, getItemFromCart } from "../../cart";

function ProductCard({ product, onChange }) {
  return (
    <div className={classes.card}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}$</p>
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
            addItemToCart(product.id);
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
