import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Data } from "./reducer";

const rootReducer = combineReducers({
  Data,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
