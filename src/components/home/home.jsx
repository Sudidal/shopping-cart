import { useNavigate } from "react-router-dom";
import classes from "./home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes.menu}>
      <h2>Home</h2>
      <div className={classes.section}>
        <div className={classes.division}>
          <p className={classes.desc}>
            Find everything from A-Z, High quality from top brands, At lowest
            prices
          </p>
        </div>
        <div className={classes.division}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1613332098721-054a53462d12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className={`${classes.section} ${classes.middle}`}>
        <div className={classes.division}>
          <p className={classes.desc}>Shop from home with our worldwide shipping service</p>
        </div>
        <div className={classes.division}>
          <img
            className={classes.image}
            src="https://images.pexels.com/photos/6393352/pexels-photo-6393352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.division}>
          <p className={classes.desc}>Got problems? Reach to us via our 24/7 customer service</p>
        </div>
        <div className={classes.division}>
          <img
            className={classes.image}
            src="https://images.pexels.com/photos/8867213/pexels-photo-8867213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <button
        className={classes.shopBtn}
        onClick={() => {
          navigate("/shop");
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Home;
