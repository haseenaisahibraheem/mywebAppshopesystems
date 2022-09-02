import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const { name, price, description, id, preview } = props.data;

  console.log(props.data);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name: name,
        preview,
      })
    );
  };
  return (
    <div class="button">
      <button class="add_to_cart" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
