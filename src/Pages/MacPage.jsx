import mac from '../Asset/mac/mac.webp'
import { macModels } from '../Data/macData.js'
import WhyMac from '../Data/whymac.jsx'
import Performance from './Performance.jsx'
import ProductCard from '../Components/ProductCard.jsx'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice.js'

const MacPage = () => {
  const dispatch = useDispatch()

  return (
    <div className="bg-[#f5f5f7] min-h-screen">

      <section className="px-20 pt-10">
        <h2 className="text-4xl font-semibold">
          Shop Mac
        </h2>
      </section>

      <h2 className="text-5xl font-semibold text-center pt-20">
        Buy Your Dream And fastest Laptop Here
      </h2>
      <section className="px-20 mt-16 flex items-center justify-between gap-10">

        <div className="w-1/2">

          <h2 className="text-5xl font-semibold">
            Mac
          </h2>

          <p className="text-2xl text-gray-500 mt-6 max-w-lg">
            Supercharged by Apple silicon.
            Fast, thin and incredibly powerful.
          </p>

          <p className="text-xl mt-6">
            From ₹99,900
          </p>

          <button
            onClick={() => dispatch(addToCart(macModels[4]))}
            className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

        </div>

        <div className="w-1/2">

          <img
            src={mac}
            alt="MacBook"
            className="w-full object-contain hover:scale-105 transition-transform duration-500"
          />

        </div>

      </section>
      <section className="px-20 mt-16">

        <div className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">

          {macModels.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </section>

      <Performance />
      <WhyMac />

    </div>
  )
}

export default MacPage