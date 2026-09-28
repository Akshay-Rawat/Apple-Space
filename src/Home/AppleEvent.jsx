import React from 'react'
import first from '../Asset/Home/first.jpg'
const AppleEvent = () => {
    return (
        <div>
            {/* Apple Event */}
            <section
                className="h-[635px] bg-cover bg-center text-white text-center"
                style={{ backgroundImage: `url(${first})` }}
            >
                <div className="pt-[440px]">

                    <p className="text-2xl font-semibold max-w-4xl mx-auto">
                        Introducing iPhone Duo, iPhone 18 Pro, Apple Watch Series 12,
                        <br />
                        Apple Watch Ultra 4 and AirPods 5.
                    </p>

                    <button className="bg-white text-black px-7 py-3 rounded-full text-lg mt-6">
                        Watch the event
                    </button>

                </div>
            </section>
        </div>
    )
}

export default AppleEvent