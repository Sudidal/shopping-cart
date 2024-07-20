import { useNavigate } from "react-router-dom";
import classes from "./productCard.module.css";

function ProductCard({ product }) {
const navigate = useNavigate()
  return (
    <button className={classes.card} onClick={() => {
      if(!product.quantity)
      navigate(`./product/${product.id}`)
    }}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}$ {product.quantity && <span>-quantity:{product.quantity}</span>}</p>
    </button>
  );
}

export default ProductCard;
