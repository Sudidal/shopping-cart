import classes from "./errorPage.module.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.menu}>
      <img
        className={classes.photo}
        src="https://preview.redd.it/06mc6ezq8uiz.jpg?width=640&crop=smart&auto=webp&s=6ae3266af4f7b4f4d07e4fa3a7faa30348bef43e"
        alt=""
      />
      <h1 className={classes.text}>A very dangerous error has occured</h1>
      <p className={classes.text}>
        Hmm, there are two main reasons for this to happen
      </p>
        <p className={classes.text}>First, You are trying to mess with my website</p>
        <p className={classes.text}>
          Second, there's a problem with my website that I'm very lazy to fix</p>
      <p className={classes.text}>
        Anyways let's get you back to the home page before you get a headache
      </p>
      <div>
        <button
          className={classes.homeBtn}
          onClick={() => {
            navigate("/");
          }}
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
