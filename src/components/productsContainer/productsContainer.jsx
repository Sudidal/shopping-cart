import ProductCard from "../productCard/productCard"

function ProductsContainer({products}) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-14 ">
      {
        products.length > 0? (
          products.map(prod => {
            return <ProductCard key={prod.id} product={prod} />
          })
        ) : <p>Hmm? Nothing to display here  ¯\_( ❛ ͜ʖ ❛ )_/¯</p>
      }
    </div>
  )
}

export default ProductsContainer