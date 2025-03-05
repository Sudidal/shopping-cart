import { Link } from "react-router-dom";
import CartSvg from "../../../public/shopping-cart";

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
    <nav className="m-0 flex items-center justify-between bg-nav px-10 h-60">
      <Link to={"/home"} className="navlink text-xl">
        <h1>Oxide Store</h1>
      </Link>
      <div className="flex items-center">
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
