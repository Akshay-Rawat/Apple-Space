import Iphone18 from "../Home/Iphone18"
import { iphoneModels } from "../Data/iphoneData"
import Performance from "./Performance"
import ProductCard from "../Components/ProductCard"

const IphonePage = () => {

  return (
    <div className="bg-[#f5f5f7] min-h-screen">

      <Iphone18 />

      {/* iPhone Lineup */}
      <section className="px-20 mt-16">

        <div className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">

          {iphoneModels.map((item) => (
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

export default IphonePage