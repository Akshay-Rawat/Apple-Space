import accessory from "../Asset/Accessory/Accessory.webp"
import { accessoryModels } from "../Data/accessoryData"
import Performance from "./Performance.jsx"
import ProductCard from "../Components/ProductCard"
import { addToCart } from "../Redux/cartSlice.js"
import { useDispatch } from "react-redux"

const AccessoryPage = () => {
    const dispatch = useDispatch()

    return (
        <div className="bg-[#f5f5f7] min-h-screen">

            <h2 className="text-5xl font-semibold pt-20 px-20">
                Accessory
            </h2>

            {/* Hero */}
            <section className="px-20 mt-16 flex items-center justify-between gap-10">

                <div className="w-1/2">

                    <h2 className="text-5xl font-semibold">
                        Apple AirPods
                    </h2>

                    <p className="text-2xl text-gray-500 mt-6 max-w-lg">
                        Incredible sound.
                        Effortless connection.
                        Designed for your Apple devices.
                    </p>

                    <p className="text-xl mt-6">
                        From ₹29,900
                    </p>

                    <button
                        onClick={() => dispatch(addToCart(accessoryModels[0]))}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-700 transition"
                    >
                        Buy
                    </button>

                </div>

                <div className="w-1/2">

                    <img
                        src={accessory}
                        alt="Apple Accessory"
                        className="w-full object-contain hover:scale-105 transition-transform duration-500"
                    />

                </div>

            </section>

            {/* Accessories */}
            <section className="px-20 mt-16">

                <h2 className="text-5xl font-semibold text-center pt-20">
                    Explore the Essentials
                </h2>

                <div className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 mt-12">

                    {accessoryModels.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))}

                </div>

            </section>

            <Performance />

        </div>
    )
}

export default AccessoryPage