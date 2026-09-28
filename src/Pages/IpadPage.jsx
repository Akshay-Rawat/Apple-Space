import Ipad from "../Asset/ipad/Ipad.webp"
import Design from "../Asset/ipad/Design.jpg"
import { ipadModels } from "../Data/ipadData"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartSlice"
import Performance from "./Performance"
import ProductCard from "../Components/ProductCard"

const IpadPage = () => {
  const dispatch = useDispatch()

  return (
    <div className="bg-[#f5f5f7] min-h-screen">

      {/* Heading */}
      <h2 className="text-5xl font-semibold pt-20 px-20">
        iPad
      </h2>

      {/* Main iPad Section */}
      <section className="px-20 mt-16 flex items-center justify-between gap-10">

        <div className="w-1/2">

          <h2 className="text-5xl font-semibold">
            Lovable.
            <br />
            Drawable.
            <br />
            Magical.
          </h2>

          <p className="text-2xl text-gray-500 mt-6 max-w-lg">
            Supercharged by Apple silicon.
            Fast, thin and incredibly powerful.
          </p>

          <p className="text-xl mt-6">
            From ₹99,900
          </p>

          <button
            onClick={() => dispatch(addToCart(ipadModels[0]))}
            className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-700 transition"
          >
            Buy
          </button>

        </div>

        <div className="w-1/2">

          <img
            src={Design}
            alt="iPad"
            className="w-full object-contain hover:scale-105 transition-transform duration-500"
          />

        </div>

      </section>

      {/* iPad Lineup */}
      <section className="px-20 mt-16">

        <h2 className="text-5xl font-semibold text-center pt-20">
          Explore the Lineup
        </h2>

        <div className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 mt-10">

          {ipadModels.map((item) => (
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

export default IpadPage