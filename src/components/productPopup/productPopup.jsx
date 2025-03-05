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
    <dialog
      className="animate-popup bg-primary-white border-primary-dark dark:bg-secondary-dark h-[80%] w-[70%] rounded-2xl border-4 text-white backdrop:bg-black/50"
      ref={dialogRef}
    >
      <div className="flex flex-col gap-[30px] p-[20px]">
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error has occured, {error}</h1>}

        {product && !error && !loading && (
          <div className="p-20">
            <div className="flex items-center gap-[20px]">
              <img
                src={product.image}
                alt=""
                className="h-[400px] w-1/2 object-contain"
              />
              <div className="w-1/2">
                <h2 className="mb-14 text-xl">{product.title}</h2>
                <p className="mb-14 text-white/[50%]">{product.description}</p>

                <div className="flex items-center">
                  {!getItemFromCart(product.id) ? (
                    <button
                      className="primary-btn"
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

                  <input
                    className="bg-ternary-light dark:bg-ternary-dark ml-15 w-[50px] py-5 pl-7"
                    ref={quantityRef}
                    type="number"
                    placeholder="Enter quantity"
                    defaultValue={1}
                    min={1}
                  />
                  <p className="ml-auto">{product.price}$</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          className="top-right-btn"
          onClick={() => {
            navigate(backPath);
          }}
        >
          ⨯
        </button>
      </div>
    </dialog>
  );
}

export default ProductPopup;
