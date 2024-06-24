import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from './Slice/CheckOutSlice';
import countReducer from "./Slice/countSlice";
import cartReducer from "./Slice/CartSlice";



export const store = configureStore({
    reducer: {
        toggle: CheckOutReducer,
        count: countReducer,
        cart: cartReducer
    }
})