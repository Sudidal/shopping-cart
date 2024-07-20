import { getCartList } from "../../cart";
import { getSpecificProducts } from "../../products";
import ProductsContainer from "../productsContainer/productsContainer";
import { useState, useEffect } from "react";

function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const list = [];
    getCartList().forEach((item) => {
      list.push(item.id);
    });

    getSpecificProducts(list).then((response) => {
      setLoading(false);
      if (response.status === "success") {
        setProducts(response.data);
      } else {
        setError(response.data.toString());
      }
    });
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {loading && <p>Loading...</p>}
      {error && <p>An error has occured, {error}</p>}
      {!loading && !error && <ProductsContainer products={products} />}
    </div>
  );
}

export default Cart;
