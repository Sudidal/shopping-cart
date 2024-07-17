import classes from "./productCard.module.css"

function ProductCard({ product }) {
  return (
    <div className={classes.card}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}$</p>
    </div>
  );
}

export default ProductCard;
