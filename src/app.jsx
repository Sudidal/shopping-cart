import NavigationBar from "./components/navigationBar/navigationBar";
import { useState } from "react";
import { Outlet, } from "react-router-dom";
import { getCartItemsCount } from "./cart";

function App() {
  const [counter, setCounter] = useState(0);

  function update() {
    setCounter(counter+1)
  }
  
  return (
    <>
      <NavigationBar cartCount={getCartItemsCount()} />
      <Outlet context={update} />
    </>
  );
}

export default App;
