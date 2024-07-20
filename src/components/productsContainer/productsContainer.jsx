import ProductCard from "../productCard/productCard"
import classes from "./productsContainer.module.css"

function ProductsContainer({products}) {
  return (
    <div className={classes.cardsContainer}>
      {
        products.length > 0? (
          products.map(prod => {
            return <ProductCard key={prod.id} product={prod} />
          })
        ) : <p>Hmm? Nothing to display  ¯\_( ❛ ͜ʖ ❛ )_/¯</p>
      }
    </div>
  )
}

export default ProductsContainer