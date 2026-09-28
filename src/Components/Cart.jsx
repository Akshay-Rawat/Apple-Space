import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Link
            to="/cart"
            className="relative flex items-center justify-center cursor-pointer"
        >
            <span className="text-2xl">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 8h14l-1 13H6L5 8z" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
            </span>

            {cartCount > 0 && (
                <span
                    className="
                        absolute
                        -top-1
                        -right-3
                        bg-red-500
                        text-white
                        text-[10px]
                        font-bold
                        w-5
                        h-5
                        rounded-full
                        flex
                        items-center
                        justify-center
                    "
                >
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

export default Cart;