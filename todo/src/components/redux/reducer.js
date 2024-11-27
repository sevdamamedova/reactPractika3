import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ghange: (state, action) => {
      state.val = action.payload;
    },
    save: (state) => {
      const newObj = {
        id: state.arr.length + 1,
        title: state.val,
      };
      state.arr = [...state.arr, newObj];
      state.val = "";
    },
    del: (state, action) => {
      const index = state.arr?.findIndex((itme) => itme.id === action.payload);
      state.arr?.splice(index, 1);
    },
  },
});

export const Data = counterSlice.reducer;
export const { ghange, save, del } = counterSlice.actions;
