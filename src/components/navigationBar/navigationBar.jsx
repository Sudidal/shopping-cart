import { Link } from "react-router-dom";
import CartSvg from "../../../public/shopping-cart";
import themeManager from "../../themeManager";

function NavigationBar({ cartCount }) {
  const items = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Shop",
      link: "/shop",
    },
  ];

  return (
    <nav className="bg-primary-light dark:bg-primary-dark m-0 flex h-60 items-center justify-between px-10">
      <Link to={"/home"} className="navlink text-xl">
        <h1>Oxide Store</h1>
      </Link>
      <div className="flex items-center">
        <button onClick={themeManager.switchTheme}>
          <img src="/theme-switch.svg" alt="" className="navlink w-20" />
        </button>
        {items.map((item) => {
          return (
            <Link key={item.title} to={item.link} className="navlink">
              {item.title}
            </Link>
          );
        })}
        <Link to="/cart" className="navlink">
          <div className="icon-with-text">
            <CartSvg />
            <p>{cartCount}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
