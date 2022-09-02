import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import classes from "./Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetch(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    )
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  console.log(data);

  const productData = data.map((dat) =>
    !dat.isAccessory ? (
      <Fragment>
        <div className={classes.single_preview} key={dat.id}>
          <Link to={`/product_detail?p=${dat.id}`} className={classes.link}>
            <img
              className={classes.preview_img}
              src={dat.preview}
              alt="data_image"
            />
            <div className={classes.description}>
              <h3 className={classes.name}>{dat.name}</h3>
              <h4 className={classes.brand}>{dat.brand}</h4>
              <h3 className={classes.price}>Rs.{dat.price}</h3>
            </div>
          </Link>
        </div>
      </Fragment>
    ) : (
      ""
    )
  );
  const accessory = data.map((dat) =>
    dat.isAccessory ? (
      <Fragment>
        <div className={classes.single_preview} key={dat.id}>
          <Link to={`/product_detail?p=${dat.id}`} className={classes.link}>
            <img
              className={classes.preview_img}
              src={dat.preview}
              alt="data_image"
            />
            <div className={classes.description}>
              <h3 className={classes.name}>{dat.name}</h3>
              <h4 className={classes.brand}>{dat.brand}</h4>
              <h3 className={classes.price}>Rs.{dat.price}</h3>
            </div>
          </Link>
        </div>
      </Fragment>
    ) : (
      ""
    )
  );

  return (
    <section className={classes.Products}>
      <h2>Clothing for Men and Women</h2>
      <div className={classes.clothing} id="clothing">
        {productData}
      </div>
      <h2>Accessories for Men and Women</h2>
      <div className={classes.accessories} id="accessories">
        {accessory}
      </div>
      <Footer />
    </section>
  );
};

export default Products;
