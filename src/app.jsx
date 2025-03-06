import NavigationBar from "./components/navigationBar/navigationBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { getCartItemsCount } from "./cart";
import ScrollToTop from "./scrollToTop";
import themeManager from "./themeManager";

function App() {
  const [counter, setCounter] = useState(0);

  themeManager.applyTheme();

  function update() {
    setCounter(counter + 1);
  }

  return (
    <>
      <ScrollToTop />
      <NavigationBar cartCount={getCartItemsCount()} />
      <Outlet context={update} />
    </>
  );
}

export default App;
