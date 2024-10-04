import { initialState } from "./initalState";
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countProducts: (state, action) => {
      const newProduct = action.payload;
      state.products = state.products.map((product) =>
        product.id === newProduct.id ? { ...product, count: newProduct.count } : product
      );
    },
    resetCount: (state) => {
      state.products = state.products.map((product) => ({ ...product, count: 0 }));
    },
  },
});

export const Data = counterSlice.reducer;
export const { countProducts, resetCount } = counterSlice.actions;
