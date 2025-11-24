import { Link } from "react-router-dom";
import classes from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={classes.body}>
      {/* <header className={classes.top_header}></header> */}

      <div>
        <div className={classes.starsec}></div>
        <div className={classes.starthird}></div>
        <div className={classes.starfourth}></div>
        <div className={classes.starfifth}></div>
      </div>

      <div className={classes.lamp__wrap}>
        <div className={classes.lamp}>
          <div className={classes.cable}></div>
          <div className={classes.cover}></div>
          <div className={classes.in_cover}>
            <div className={classes.bulb}></div>
          </div>
          <div className={classes.light}></div>
        </div>
      </div>
      <section className={classes.error}>
        <div className={classes.error__content}>
          <div className={`${classes.error__message} ${classes.message}`}>
            <Link to='/' className={classes.message__title}>Page Not Found</Link>
            <p className={classes.message__text}>
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again, or take a look at our.
            </p>
          </div>
          <div className={`${classes.error__nav} ${classes.e_nav}`}></div>
        </div>
      </section>
    </div>
  );
};
