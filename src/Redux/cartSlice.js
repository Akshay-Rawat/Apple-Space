import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const getPriceValue = (price) => {
    if (typeof price === "number") {
        return price;
    }

    if (typeof price === "string") {
        return Number(price.replace(/[^\d.]/g, "")) || 0;
    }

    return 0;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = {
                ...action.payload,
                name: action.payload.name || action.payload.title,
                price: getPriceValue(action.payload.price),
            };

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

        removeFromCart: (state, action) => {
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
