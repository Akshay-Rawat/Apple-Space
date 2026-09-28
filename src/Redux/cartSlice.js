import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existProduct = state.items.find(
                (item) => item.id === product.id
            )

            if (existProduct) {
                existProduct.quantity += 1;
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                })
            }

        },

        removeFromcart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },

    },
})

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer;
