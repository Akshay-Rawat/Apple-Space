import React from "react";

const LearnMore = () => {
    return (
        <div className="bg-white text-gray-900">

            {/* Hero Section */}
            <section className="bg-gray-100 text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Discover Mac.
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                    Powerful performance, incredible battery life, and a
                    beautiful design — everything you need to do more.
                </p>
            </section>

            {/* Performance */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-blue-600 font-semibold mb-3">
                            PERFORMANCE
                        </p>

                        <h2 className="text-4xl font-bold mb-6">
                            Fast. Powerful. Ready for anything.
                        </h2>

                        <p className="text-lg text-gray-600 leading-8">
                            Mac gives you the power to handle everything from
                            everyday tasks to demanding creative workflows.
                            Open apps quickly, edit photos and videos, write
                            code, and multitask with ease.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center">
                        <span className="text-7xl">💻</span>
                    </div>

                </div>
            </section>

            {/* Battery */}
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <p className="text-blue-400 font-semibold mb-3">
                        BATTERY LIFE
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Go all day.
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Work, create, stream, and stay productive with
                        impressive battery life designed to keep up with
                        your day.
                    </p>

                </div>
            </section>

            {/* Display */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold mb-3">
                        DISPLAY
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        See everything beautifully.
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Enjoy sharp details, rich colors, and an immersive
                        viewing experience for work and entertainment.
                    </p>

                    <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
                        <span className="text-8xl">🖥️</span>
                    </div>

                </div>
            </section>

            {/* macOS */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="bg-white rounded-3xl h-80 flex items-center justify-center shadow-sm">
                        <span className="text-7xl">🍎</span>
                    </div>

                    <div>
                        <p className="text-blue-600 font-semibold mb-3">
                            macOS
                        </p>

                        <h2 className="text-4xl font-bold mb-6">
                            Simple. Powerful. Familiar.
                        </h2>

                        <p className="text-lg text-gray-600 leading-8">
                            macOS is designed to make your Mac easy to use.
                            From organizing your files to discovering new
                            apps, everything works together naturally.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold mb-3">
                        PRIVACY
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Your privacy matters.
                    </h2>

                    <p className="text-lg text-gray-600 leading-8">
                        Privacy is built into the experience, with features
                        designed to help keep your personal information
                        protected.
                    </p>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-100 text-center py-20 px-6">

                <h2 className="text-4xl font-bold mb-6">
                    Ready to explore?
                </h2>

                <p className="text-gray-600 text-lg mb-8">
                    Find the Mac that's right for you.
                </p>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                    Shop Mac
                </button>

            </section>

        </div>
    );
};

export default LearnMore;