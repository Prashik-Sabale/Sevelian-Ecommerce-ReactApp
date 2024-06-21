import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from './Slice/CheckOutSlice';
import countReducer from "./Slice/countSlice";



export const store = configureStore({
    reducer: {
        checkout: CheckOutReducer,
        count: countReducer,
    }
})