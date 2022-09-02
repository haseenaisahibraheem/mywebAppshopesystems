import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import "./CheckOut.css";
import Footer from "./Footer";

const CheckOut = (props) => {
  const cartItems = useSelector((state) => state.items);
  const toatalItems = useSelector((state) => state.totalQuantity);

  let overallPrice = 0;
  cartItems.map((item) => {
    overallPrice = overallPrice + item.totalPrice;
    console.log(overallPrice);
  });

  console.log(cartItems);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    console.log("clicked");
    dispatch(cartActions.clearCartData());
  };

  return (
    <Fragment>
      <section className="checkout_page">
        <div class="container">
          <h1 className="checkout">Checkout</h1>
          <div class="cart_container">
            <div className="left_page">
              <p>
                Total Items: <span className="no_of_items">{toatalItems}</span>
              </p>
              {cartItems.map((item) => (
                <Fragment>
                  <div className="cart_items">
                    <div className="item">
                      <img src={item.preview} />

                      <div className="detail">
                        <h3>{item.name}</h3>
                        <p>x{item.quantity}</p>
                        <p>Amount: {item.totalPrice}</p>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="right_page">
              <div className="total_amount">
                <h2>Total Amount</h2>
                <p>
                  Total Amount: Rs{" "}
                  <span className="total_price">{overallPrice}</span>
                </p>
                <Link to="/order" onClick={clearCartHandler}>
                  <button className="place_order">Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </Fragment>
  );
};

export default CheckOut;
