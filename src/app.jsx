import NavigationBar from "./components/navigationBar/navigationBar";
import ProductsContainer from "./components/productsContainer/productsContainer";
import { useState } from "react";
import { getCartItemsCount } from "./cart";

function App() {
  const [counter, setCounter] = useState(0);

  function update() {
    setCounter(counter+1)
  }
  
  return (
    <>
      <NavigationBar cartCount={getCartItemsCount()} />
      <ProductsContainer onChange={update} />
    </>
  );
}

export default App;
