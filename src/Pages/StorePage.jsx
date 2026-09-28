import React from 'react'
import { Link } from 'react-router-dom'

import { products, latestProducts } from '../Data/products'
import StoreBenefits from '../Components/StoreBenefits'
import ProductCard from '../Components/ProductCard'

const StorePage = () => {

    return (
        <div className="bg-[#f5f5f7] min-h-screen py-10">


            <div className="flex justify-between items-center px-16 mb-10">

                <h1 className="text-7xl font-semibold">
                    Store
                </h1>

                <div className="text-right">

                    <h2 className="text-3xl font-semibold">
                        The best way to buy the
                        <br />
                        products you love.
                    </h2>

                </div>

            </div>
            <br />
            <br />


            <div className="flex justify-center gap-16 px-10 overflow-x-auto">

                {products.map((product) => (

                    <Link
                        key={product.name}
                        to={product.path}
                        className="min-w-[180px] text-center group"
                    >


                        <div className="h-28 flex items-center justify-center">

                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                    max-h-full
                                    max-w-full
                                    object-contain
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            />

                        </div>



                        <h3 className="text-lg font-semibold mt-5">
                            {product.name}
                        </h3>

                    </Link>

                ))}

            </div>


            <section className="mt-24">

                <h2 className="text-4xl font-semibold px-16 mb-8">

                    The latest.

                    <span className="text-gray-500">
                        {' '}Take a look at what's new.
                    </span>

                </h2>



                <div className="flex gap-6 overflow-x-auto px-16 pb-10">

                    {latestProducts.map((product) => (

                        <ProductCard
                            key={product.title}
                            product={product}
                        />

                    ))}

                </div>

            </section>



            <StoreBenefits />

        </div>
    )
}

export default StorePage