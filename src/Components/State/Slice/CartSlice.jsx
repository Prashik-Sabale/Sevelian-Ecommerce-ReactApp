import { createSlice } from '@reduxjs/toolkit';
import { items } from '../../../Cartitems';

const initialState = {
    cart: [],
    items: items,
    totalQuantity: 0,
    totalPrice: 0,


};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cartTotal" + cartTotal);
                    console.log("cartItem" + cartItem);

                    const { price, quantity } = cartItem
                    console.log(price, quantity);

                    const itemsTotal = price * quantity;
                    cartTotal.totalPrice += itemsTotal;
                    cartTotal.totalQuantity += quantity

                    return cartTotal
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity

        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        },
    }
});

export const { add, decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } = CartSlice.actions
// export const { add } = CartSlice.actions;
export default CartSlice.reducer;

















// reducers: {
//     add: (state, action) => {

//         // state.amount = state.amount + 1;
//         // const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
//         // cartItem ? (cartItem.amount = cartItem.amount + 1) : state.cartItems.push({ ...action.payload, amount: 1 });
//         let find = state.cart.findIndex((item) => item.id === action.payload.id)
//         if (find >= 0) {
//             state.cart[find].quantity += 1
//         } else {

//             state.cart.push(action.payload)
//         }

//     }
// },