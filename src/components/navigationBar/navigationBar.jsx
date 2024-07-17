import classes from "./navigationBar.module.css"

function NavigationBar() {
  const items = [
    {
      title: "Home",
      link: "https://fast.com/",
    },
    {
      title: "Shop",
      link: "https://fast.com/",
    },
    {
      title: "Cart",
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
      </div>
    </nav>
  );
}

export default NavigationBar;
