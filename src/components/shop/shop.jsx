import { useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductsContainer from "../productsContainer/productsContainer";
import { getAllProducts } from "../../products";

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const update = useOutletContext();

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((response) => {
      setLoading(false);
      if (response.status === "success") {
        setProducts(response.data);
      } else {
        setError(response.data.toString());
        console.error("ahhh those sneaky errors, " + response.data);
      }
    });
  }, []);

  return (
    <div className="menu">
      <h2>Shop</h2>
      {loading && <p>Loading...</p>}
      {error && <p>An error has occured: {error}</p>}
      {!loading && !error && <ProductsContainer products={products} />}
      <Outlet context={update} />
    </div>
  );
}

export default Shop;
