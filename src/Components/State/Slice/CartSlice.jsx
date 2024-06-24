import { createSlice } from '@reduxjs/toolkit';
import { items } from '../../../Cartitems';

const initialState = {
    cart: [],
    items: items,
    amount: 0,
    total: 0,

};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {

            // state.amount = state.amount + 1;
            // const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
            // cartItem ? (cartItem.amount = cartItem.amount + 1) : state.cartItems.push({ ...action.payload, amount: 1 });
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {

                state.cart.push(action.payload)
            }

        }
    },
});


export const { add } = CartSlice.actions;
export default CartSlice.reducer;