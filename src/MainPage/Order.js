import "./Order.css";
import Footer from "./Footer";

const Order = () => {
  return (
    <div>
      <div className="order_block">
        <img
          src="https://shoplane.netlify.app/img/img_confirm.png"
          alt="ordered_Image"
        />
        <h3>Order Placed Successfully</h3>
        <p>We have sent you an email with the order details</p>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
