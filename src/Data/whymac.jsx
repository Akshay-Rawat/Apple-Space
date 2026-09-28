const whymac = () => {
  return (
    <div>
      <section className="px-8 md:px-16 lg:px-20 mt-24 pb-20">

        <div className="bg-white rounded-3xl p-10 md:p-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-center">
            Why Mac?
          </h2>

          <p className="text-gray-500 text-center text-lg mt-5 max-w-2xl mx-auto">
            Mac is designed to give you powerful performance,
            incredible battery life and a seamless experience.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold">
                Powerful Performance
              </h3>
              <p className="text-gray-500 mt-2">
                Apple silicon delivers incredible speed and efficiency.
              </p>
            </div>


            <div className="text-center">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-semibold">
                All-day Battery
              </h3>
              <p className="text-gray-500 mt-2">
                Work, create and play without constantly charging.
              </p>
            </div>


            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold">
                Built for Privacy
              </h3>
              <p className="text-gray-500 mt-2">
                macOS and Apple silicon are designed with privacy in mind.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div >
  )
}

export default whymac