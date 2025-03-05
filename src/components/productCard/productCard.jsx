import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <button
      className="flex w-[300px] flex-col items-center justify-around rounded-xl bg-[rgb(209,207,207)] p-20"
      onClick={() => {
        if (!product.quantity) navigate(`./product/${product.id}`);
      }}
    >
      <img
        src={product.image}
        alt=""
        className="h-[200px] w-[200px] object-contain"
      />
      <p className="text-wrap">{product.title}</p>
      <p>
        {product.price}${" "}
        {product.quantity && <span>-quantity:{product.quantity}</span>}
      </p>
    </button>
  );
}

export default ProductCard;
