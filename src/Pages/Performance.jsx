import React from 'react'
import { performance } from "../Data/Performance"

const Performance = () => {
    return (
        <>
            <section className="px-5 md:px-20 mt-20">
                <div className="flex gap-6 overflow-x-auto pb-5 scrollbar-hide">

                    {performance.map((item) => (
                        <div
                            key={item.id}
                            className="relative flex-shrink-0 w-[300vw] md:w-[360px] h-[600px] rounded-3xl overflow-hidden"
                        >

                            <img
                                src={item.image}
                                alt={item.heading}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Performance