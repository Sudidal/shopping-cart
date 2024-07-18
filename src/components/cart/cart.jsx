import { getCartList } from "../../cart"
import { getSpecificProducts } from "../../products";
import ProductCard from "../productCard/productCard";
import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState ([]) 
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState (null)

  useEffect(() => {
    setLoading(true)
    const list = getCartList();
    getSpecificProducts(list).then((response) => {
      setLoading(false)
      if(response.status === "success") {
        setCartItems(response.data)
      }
      else {
        setError(response.data.toString())
      }
    })
  }, [])
  
  if(loading) return <p>Loading...</p>
  if (error) return <p>An error has occured, {error}</p>
  return (
    cartItems.length > 0 ? (
    cartItems.map((prod) => {
      return <ProductCard key={prod.id} product={prod} />
    })
  ) : <p>Hmmm, there's nothing here</p>
)
}

export default Cart