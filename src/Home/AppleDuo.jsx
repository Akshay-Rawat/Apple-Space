import React from 'react'
import iphoneduo from '../Asset/Home/iphoneduo.jpg'
import { Link } from 'react-router-dom'
import LearnMore from '../Pages/LeanMore'
const AppleDuo = () => {
    return (
        <div>
            {/* iPhone Duo Section */}
            <section className="bg-[#f5f5f7] text-center pt-20 overflow-hidden">

                <h1 className="text-6xl font-semibold">
                    iPhone Duo
                </h1>

                <p className="text-2xl font-semibold text-gray-600 mt-5">
                    The largest iPhone display ever. Foldable, posable, standable.
                    <br />
                    Featuring unique iOS experiences for ultimate versatility.
                </p>

                <p className="text-lg text-gray-500 mt-7">
                    Pre-order starting at 5:30 PM IST on 16 October
                    <br />
                    Available from 23 October
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-7">

                    <Link to="/LearnMore"
                        className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                    >
                        Learn more →
                    </Link>

                    <Link
                        to="/iphone"
                        className="inline-flex items-center gap-2 border border-gray-400 px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:border-gray-600 hover:scale-105"
                    >
                        View pricing
                    </Link>

                </div>

                <img
                    src={iphoneduo}
                    alt="iPhone Duo"
                    className="mx-auto mt-12 w-[1000px]"
                />

            </section>
        </div>
    )
}

export default AppleDuo