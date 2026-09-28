import React from 'react'

const benefits = [
    {
        icon: '▣',
        color: 'text-green-600',
        title: 'No Cost EMI.◇ Plus',
        description: 'Instant Cashback.∆'
    },
    {
        icon: '⇄',
        color: 'text-blue-600',
        title: 'Exchange your smartphone,',
        description: 'get ₹4500.00-₹81500.00 in credit towards a new one.※'
    },
    {
        icon: '',
        color: 'text-orange-500',
        title: 'Customise your Mac.',
        description: ''
    },
    {
        icon: '☺',
        color: 'text-purple-600',
        title: 'Make them yours.',
        description: 'Engrave a mix of emoji, names and numbers for free.'
    },
    {
        icon: '▣',
        color: 'text-green-600',
        title: 'Easy ways to pay.',
        description: 'Choose the payment option that works best for you.'
    }
]

const StoreBenefits = () => {
    return (
        <section className="mt-28 px-8 md:px-20">

            {/* Heading */}
            <h2 className="text-4xl font-semibold mb-10">
                The Apple Store difference.
                <span className="text-gray-500">
                    {' '}Even more reasons to shop with us.
                </span>
            </h2>

            {/* Cards */}
            <div className="flex gap-6 overflow-x-auto pb-8">

                {benefits.map((benefit, index) => (

                    <div
                        key={index}
                        className="
                            min-w-[390px]
                            h-[300px]
                            bg-white
                            rounded-3xl
                            p-10
                            shadow-sm
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            cursor-pointer
                        "
                    >

                        {/* Icon */}
                        <div
                            className={`text-5xl ${benefit.color} mb-6`}
                        >
                            {benefit.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-semibold leading-tight">
                            {benefit.title}
                        </h3>

                        {/* Description */}
                        {benefit.description && (
                            <p
                                className={`text-2xl font-semibold mt-1 ${index === 1 || index === 3
                                        ? benefit.color
                                        : ''
                                    }`}
                            >
                                {benefit.description}
                            </p>
                        )}

                    </div>

                ))}

            </div>

        </section>
    )
}

export default StoreBenefits