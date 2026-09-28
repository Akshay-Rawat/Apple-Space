import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import LearnMore from "../Pages/LeanMore"
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div
            className="
                bg-white
                rounded-2xl
                p-6
                text-center
                shadow
                hover:shadow-lg
                hover:scale-[1.03]
                transition-all
                duration-300
                flex-shrink-0
                w-72
                snap-start
            "
        >

            <img
                src={product.image}
                alt={product.name}
                className="
                    w-full
                    h-48
                    object-contain
                    mb-4
                    transition-transform
                    duration-500
                    hover:scale-105
                "
            />

            <h2>{product.description}</h2>

            <h2 className="text-2xl font-semibold">
                {product.name}
            </h2>

            {product.price && (
                <p className="text-black p-2 mt-2">
                    `₹{product.price}`
                </p>
            )}

            <div className="flex items-center gap-6 mt-5">

                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>

                <Link
                    to="/LearnMore"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                    Learn more →
                </Link>

            </div>

        </div>
    )
}

export default ProductCard