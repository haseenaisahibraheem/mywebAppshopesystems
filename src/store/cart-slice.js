import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  overAllAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    overAllAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          preview: newItem.preview,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    clearCartData(state, action) {
      return defaultCartState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
