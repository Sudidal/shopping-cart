import { getCartList } from "../../cart";
import { getSpecificProducts } from "../../products";
import ProductsContainer from "../productsContainer/productsContainer";
import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const update = useOutletContext();

  useEffect(() => {
    setLoading(true);

    const idList = [];
    getCartList().forEach((item) => {
      idList.push(item.id);
    });

    getSpecificProducts(idList).then((response) => {
      setLoading(false);
      if (response.status === "success") {
        setProducts(response.data);
      } else {
        setError(response.data.toString());
      }
    });
  }, []);

  return (
    <>
      <div className="menu">
        <h2 className="primary-text text-2xl">Cart</h2>
        {loading && <p>Loading...</p>}
        {error && <p>An error has occured, {error}</p>}
        {!loading && !error && <ProductsContainer products={products} />}
      </div>
      <Outlet context={update} />
    </>
  );
}

export default Cart;
