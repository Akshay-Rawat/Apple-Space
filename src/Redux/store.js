import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})