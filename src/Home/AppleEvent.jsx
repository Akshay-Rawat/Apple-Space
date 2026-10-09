import React from 'react';
import first from '../Asset/Home/first.jpg';

const AppleEvent = () => {
    return (
        <div>
            <section
                className="min-h-[635px] bg-cover bg-center text-white text-center"
                style={{ backgroundImage: `url(${first})` }}
            >
                <div className="pt-[440px] px-4">
                    <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
                        Introducing iPhone Duo, iPhone 18 Pro, Apple Watch Series 12,
                        <br className="hidden md:block" />
                        Apple Watch Ultra 4 and AirPods 5.
                    </p>

                    <a
                        href="https://youtu.be/3WpzNmY35S4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-7 py-3 rounded-full text-lg mt-6 hover:bg-gray-200 transition"
                    >
                        Watch the event
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AppleEvent;