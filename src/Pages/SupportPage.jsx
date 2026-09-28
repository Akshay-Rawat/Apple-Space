import React from "react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      <section className="bg-white text-center py-20 px-6">

        <h1 className="text-5xl md:text-6xl font-semibold">
          Apple Support
        </h1>

        <p className="text-xl text-gray-500 mt-5">
          We're here to help.
        </p>

        <div className="max-w-2xl mx-auto mt-10">
          <input
            type="text"
            placeholder="Search for products, topics, and support"
            className="w-full px-6 py-4 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold text-center">
          Get Support for Your Apple Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md">
            <h3 className="text-xl font-semibold">
              iPhone
            </h3>
            <p className="text-gray-500 mt-2">
              Get help with your iPhone
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md">
            <h3 className="text-xl font-semibold">
              Mac
            </h3>
            <p className="text-gray-500 mt-2">
              Get help with your Mac
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md">
            <h3 className="text-xl font-semibold">
              iPad
            </h3>
            <p className="text-gray-500 mt-2">
              Get help with your iPad
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-md">
            <h3 className="text-xl font-semibold">
              AirPods
            </h3>
            <p className="text-gray-500 mt-2">
              Get help with your AirPods
            </p>
          </div>

        </div>

      </section>

      <section className="bg-white py-16 px-6">

        <h2 className="text-3xl font-semibold text-center">
          Popular Topics
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mt-10">

          <button className="p-5 text-left border-b border-gray-200">
            Battery and Charging →
          </button>

          <button className="p-5 text-left border-b border-gray-200">
            Software Updates →
          </button>

          <button className="p-5 text-left border-b border-gray-200">
            Apple Account →
          </button>

          <button className="p-5 text-left border-b border-gray-200">
            Repairs and Service →
          </button>

        </div>

      </section>
      <section className="bg-white py-16 px-6">

        <a

          href="https://mail.google.com/mail/?view=cm&fs=1&to=rawatakshay585@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl font-semibold text-center"
        >
          Contact us
        </a>
      </section>

    </div>
  );
};

export default SupportPage;