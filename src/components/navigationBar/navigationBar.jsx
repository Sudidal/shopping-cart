import classes from "./navigationBar.module.css"

function NavigationBar({cartCount}) {
  const items = [
    {
      title: "Home",
      link: "https://fast.com/",
    },
    {
      title: "Shop",
      link: "https://fast.com/",
    },
  ];

  return (
    <nav className={classes.navBar}>
      <h1>Oxide Store</h1>
      <div className={classes.navLinks}>
        {items.map((item) => {
          return <a key={item.title} href={item.link}>{item.title}</a>;
        })}
        <div className="icon-with-text">
          <img className="icon" src="shopping-cart.svg" alt="" />
          <p>{cartCount}</p>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
