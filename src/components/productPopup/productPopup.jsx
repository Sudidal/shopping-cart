import {
  useNavigate,
  useParams,
  useOutletContext,
  useLocation,
} from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { getSpecificProducts } from "../../products";
import { addItemToCart, removeItemFromCart, getItemFromCart } from "../../cart";

function ProductPopup() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = useOutletContext();
  const dialogRef = useRef();
  const quantityRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = useParams().productId;

  const backPath = "/" + pathname.split("/").slice(1, -2).join("/");

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
    <dialog className="w-[700px] animate-popup" ref={dialogRef}>
      <div className="flex flex-col gap-[30px]">
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error has occured, {error}</h1>}

        {product && !error && !loading && (
          <div className="p-20">
            <h2 className="text-xl">{product.title}</h2>
            <div className="flex items-center gap-[20px]">
              <div>
                <img
                  src={product.image}
                  alt=""
                  className="h-[200px] w-[200px] object-contain"
                />
              </div>
              <p className="text-black/[50%]">{product.description}</p>
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
                  addItemToCart(
                    product.id,
                    parseInt(quantityRef.current.value),
                  );
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
          className="top-right-btn"
          onClick={() => {
            navigate(backPath);
          }}
        >
          X
        </button>
      </div>
    </dialog>
  );
}

export default ProductPopup;
