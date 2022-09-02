import classes from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.totalQuantity);
  return (
    <div className={classes.top_bar}>
      <div>
        <Link to="/" className={classes.navlink}>
          <h4 className={classes.logo}>
            <span className={classes.logo_color}>SHOP</span>LANE
          </h4>
        </Link>
      </div>
      <div className={classes.center_nav}>
        <div className={classes.home}>
          <Link
            to="/"
            activeclassName={classes.active}
            className={classes.navlink}
          >
            HOME
          </Link>
        </div>
        <div className={classes.clothing_nav}>
          <Link
            to="/"
            activeclassName={classes.active}
            className={classes.navlink}
          >
            CLOTHING
          </Link>
        </div>
        <div className={classes.accessoires}>
          <Link
            to="/"
            activeclassName={classes.active}
            className={classes.navlink}
          >
            ACCESSORIES
          </Link>
        </div>
      </div>
      <div className={classes.right_nav}>
        <div className={classes.icons}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className={classes.icons}>
          <Link to="/checkout" className={classes.link}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className={classes.cart_count}>
              <p>{cartQuantity}</p>
            </div>
          </Link>
        </div>
        <div className={classes.icons}>
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
