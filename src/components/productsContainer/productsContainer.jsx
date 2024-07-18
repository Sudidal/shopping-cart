import { useState, useEffect } from "react"
import { getAllProducts } from "../../products"
import ProductCard from "../productCard/productCard"
import classes from "./productsContainer.module.css"

function ProductsContainer({onChange}) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllProducts()
    .then(response => {
      setLoading(false)
      if(response.status === "success") {
        setProducts(response.data)
      }
      else {
        setError(response.data.toString())
        console.error("ahhh those sneaky errors, " + response.data)
      }
    })
  }, [])
  
  function update() {
    onChange();
  }

  if(loading) return <p>Loading...</p>
  else if(error) return <p>An error has occured: {error}</p>
  else return (
    <div className={classes.cardsContainer}>
      {
        products.length > 0? (
          products.map(prod => {
            return <ProductCard key={prod.id} product={prod} onChange={update} />
          })
        ) : <p>huh? nothing here</p>
      }
    </div>
  )
}

export default ProductsContainer