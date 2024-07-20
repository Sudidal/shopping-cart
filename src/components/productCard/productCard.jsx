import classes from "./productCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <Link to={`./product/${product.id}`} className={classes.card}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}$</p>
    </Link>
  );
}

export default ProductCard;
