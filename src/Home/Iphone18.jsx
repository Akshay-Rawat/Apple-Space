import React from 'react'
import iphone18 from '../Asset/Home/iphone18.mp4'
import { Link } from 'react-router-dom'
import LearnMore from '../Pages/LeanMore'
const Iphone18 = () => {
    return (
        <div>
            <section className="bg-black text-white text-center overflow-hidden">

                <h1 className="text-7xl font-semibold pt-20">
                    iPhone 18 Pro
                </h1>

                <p className="text-2xl font-semibold text-gray-400 mt-6 max-w-3xl mx-auto">
                    The longest battery life in an iPhone.
                    New 48MP Fusion Main camera with variable aperture
                    for more creative control.
                </p>

                <p className="text-lg text-gray-500 mt-8">
                    Pre-order starting at 5:30 PM IST on 12 September
                    <br />
                    Available from 18 September
                </p>

                <div className="flex justify-center gap-4 mt-7">

                    <Link to="/LearnMore"
                        className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                    >
                        Learn more →
                    </Link>

                    <Link
                        to="/iphone"
                        className="inline-flex items-center gap-2 border border-gray-400 px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-black-100 hover:border-gray-600 hover:scale-105"
                    >
                        View pricing
                    </Link>

                </div>

                <video
                    src={iphone18}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="mx-auto mt-16 w-[1100px]"
                />

            </section>
        </div>
    )
}

export default Iphone18