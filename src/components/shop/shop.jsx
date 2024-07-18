import { useOutletContext } from "react-router-dom"
import ProductsContainer from "../productsContainer/productsContainer"

function Shop() {
  const update = useOutletContext();
  
  return (
    <ProductsContainer onChange={update} />
  )
}

export default Shop