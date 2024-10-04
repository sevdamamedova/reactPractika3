import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducer/counterSlice";
import { Data } from "./reducer";

const rootReducer = combineReducers({
  Data,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// export const store = configureStore({
//   reducer: {
//     counter: Data,
//   },
// });
