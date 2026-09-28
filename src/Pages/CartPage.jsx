import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} from "../Redux/cartSlice";

const CartPage = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const [showQR, setShowQR] = useState(false);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const upiId = "yuvi001@slc";

    const upiLink = `upi://pay?pa=${upiId}&pn=Apple%20Store&am=${total}&cu=INR`;

    return (
        <div className="min-h-screen bg-[#f5f5f7] px-6 md:px-16 py-12">

            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">
                Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-sm">
                    <h2 className="text-2xl font-semibold">
                        Your cart is empty
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Add some products to your cart to see them here.
                    </p>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12"
                    >Free Shipping and Easy Return</h1>

                    <div className="space-y-6">

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-8"
                            >

                                {/* Product Image */}
                                <div className="w-full md:w-48 h-40 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 w-full">

                                    <h2 className="text-2xl font-semibold">
                                        {item.name}
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        {item.description}
                                    </p>

                                    <p className="text-lg font-medium mt-4">
                                        ₹{item.price.toLocaleString("en-IN")}
                                    </p>

                                    {/* Quantity */}
                                    <div className="flex items-center gap-4 mt-5">

                                        <button
                                            onClick={() =>
                                                dispatch(decreaseQuantity(item.id))
                                            }
                                            className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 text-xl"
                                        >
                                            -
                                        </button>

                                        <span className="text-lg font-medium">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                dispatch(increaseQuantity(item.id))
                                            }
                                            className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 text-xl"
                                        >
                                            +
                                        </button>

                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() =>
                                            dispatch(removeFromCart(item.id))
                                        }
                                        className="text-red-500 mt-4 hover:underline"
                                    >
                                        Remove
                                    </button>

                                </div>

                                {/* Item Total */}
                                <div className="text-xl font-semibold">
                                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white rounded-3xl p-8 mt-8 shadow-sm">

                        <div className="flex justify-between items-center">
                            <span className="text-xl text-gray-500">
                                Total
                            </span>

                            <span className="text-3xl font-semibold">
                                ₹{total.toLocaleString("en-IN")}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button
                                onClick={() => dispatch(clearCart())}
                                className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100"
                            >
                                Clear Cart
                            </button>

                            <button
                                onClick={() => setShowQR(true)}
                                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                            >
                                Checkout
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {showQR && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">

                    <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full">

                        <h2 className="text-2xl font-semibold">
                            Scan to Pay
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Pay ₹{total.toLocaleString("en-IN")}
                        </p>

                        <div className="flex justify-center mt-6">
                            <QRCodeCanvas
                                value={upiLink}
                                size={250}
                            />
                        </div>

                        <p className="text-sm text-gray-500 mt-5">
                            Scan this QR code using any UPI app
                        </p>

                        <button
                            onClick={() => setShowQR(false)}
                            className="mt-6 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default CartPage;