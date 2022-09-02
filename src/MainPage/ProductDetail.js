import { Fragment, useEffect } from "react";
import { useState } from "react";
import "./ProductDetail.css";
import $ from "jquery";
import CartButton from "./Cart";
import Footer from "./Footer";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);

  var productId = window.location.search.split("=")[1];

  useEffect(() => {
    const response = fetch(
      `https://5d76bf96515d1a0014085cf9.mockapi.io/product/` + productId
    )
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
        setImages(resp.photos);
        return resp;
      });
  }, []);
  console.log(data);
  console.log(images);

  let left_section = (
    <img src={data.preview} className="main_image" alt="Product_image" />
  );

  const imageHandler = (event) => {
    console.log(event);

    $(".main_image").addClass(" main_image");

    $(".preview_img img").removeClass("active-image");

    $("#" + event.target.id).addClass("active-image");

    return $(".main_image").attr("src", event.target.currentSrc);
  };

  const right_section = (
    <div className="product_description">
      <h1 className="name">{data.name}</h1>
      <h4 className="brand">{data.brand}</h4>
      <h3 className="price">Price: Rs{data.price}</h3>
      <div className="description">
        <h3>Description</h3>
        <p className="desc">{data.description}</p>
      </div>
      <div className="product_preview">
        <h3>Product Preview</h3>
        <div className="preview_img">
          {images.map((dat, i) => (
            <img
              key={dat.id}
              id={i}
              src={dat}
              className="preImg"
              alt="Preview_Images"
              onClick={imageHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <section className="product_details">
        <div className="left_section">{left_section}</div>
        <div className="right_section">
          {right_section}
          <CartButton data={data} />
        </div>
        <Footer />
      </section>
    </Fragment>
  );
};

export default ProductDetail;
