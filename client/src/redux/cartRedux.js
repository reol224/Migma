import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    isFetching : false,
    error: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    cartStart: (state) => {
      state.isFetching = true;
    },
    cartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addProduct, cartStart, cartFailure } = cartSlice.actions;
export default cartSlice.reducer;
