import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { getSpecificProducts } from "../../products";
import { addItemToCart, removeItemFromCart, getItemFromCart } from "../../cart";
import classes from "./productPopup.module.css";

function ProductPopup() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = useOutletContext();
  const dialogRef = useRef();
  const quantityRef = useRef();
  const navigate = useNavigate();
  const id = useParams().productId;

  useEffect(() => {
    dialogRef.current?.showModal();
    setLoading(true);
    getSpecificProducts([id]).then((response) => {
      setLoading(false);
      if (response.status === "success") {
        setProduct(response.data[0]);
      } else {
        setError(response.data.toString());
      }
    });
  }, [id]);

  return (
    <dialog className={classes.popUp} ref={dialogRef}>
      <div className={classes.container}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error has occured, {error}</h1>}

        {product && !error && !loading && (
          <div className={classes.content}>
            <h2 className={classes.header}>{product.title}</h2>
            <div className={classes.info}>
              <div className={classes.photo}>
                <img src={product.image} alt="" />
              </div>
              <p className={classes.description}>{product.description}</p>
            </div>
            <p>{product.price}$</p>
            <input
              ref={quantityRef}
              type="number"
              placeholder="Enter quantity"
              defaultValue={1}
              min={1}
            />
            {!getItemFromCart(product.id) ? (
              <button
                onClick={() => {
                  addItemToCart(product.id, parseInt(quantityRef.current.value));
                  update();
                }}
              >
                Add To Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  removeItemFromCart(product.id);
                  update();
                }}
              >
                Remove From Cart
              </button>
            )}
          </div>
        )}

        <button
          onClick={() => {
            navigate("/shop");
          }}
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export default ProductPopup;
