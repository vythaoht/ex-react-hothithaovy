import { configureStore } from "@reduxjs/toolkit";
import bauCuaReducer from "./bauCuaReducer/bauCuaReducer";

const store = configureStore({
  reducer: { bauCuaReducer },
});

export default store;
