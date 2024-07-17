import { useState, useEffect } from "react"
import { getProducts } from "../../products"
import ProductCard from "../productCard/productCard"
import classes from "./productsContainer.module.css"

function ProductsContainer() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProducts()
    .then(response => {
      setLoading(false)
      if(response.length > 0) {
        setProducts(response)
      }
      else {
        setError(response.toString())
        console.error("ahhh those sneaky errors, " + response)
      }
    })
  }, [])
  

  if(loading) return <p>Loading...</p>
  else if(error) return <p>An error has occured: {error}</p>
  else return (
    <div className={classes.cardsContainer}>
      {
        products.length > 0? (
          products.map(prod => {
            return <ProductCard key={prod.id} product={prod} />
          })
        ) : <p>huh? nothing here</p>
      }
    </div>
  )
}

export default ProductsContainer