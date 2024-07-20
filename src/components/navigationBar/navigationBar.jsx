import { Link } from "react-router-dom";
import classes from "./navigationBar.module.css";
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
    <nav className={classes.navBar}>
      <Link to={"/home"}>
        <h1>Oxide Store</h1>
      </Link>
      <div className={classes.navLinks}>
        {items.map((item) => {
          return (
            <Link key={item.title} to={item.link}>
              {item.title}
            </Link>
          );
        })}
        <Link to="/cart">
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
