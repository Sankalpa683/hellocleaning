import React from 'react'

const pricing = () => {
    return (
        <>
            <section className="bg-base-200 overflow-hidden" id="pricing">
                <div className="py-24 px-8 max-w-5xl mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="font-medium text-lg text-[#007aff] mb-8">Pricing</p>
                        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
                            Affordable rates for our <span className='text-[#007aff]'>beloved customers</span>
                        </h2>
                        <ul className="hidden md:flex gap-8 justify-center text-lg text-base-content-secondary mt-12">
                            <li className="flex items-center justify-center lg:justify-start gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 text-green-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Quick & Easy Online Booking
                            </li>
                            <li className="flex items-center justify-center lg:justify-start gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 text-green-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Up to 99% Customer Satisfaction
                            </li>
                            <li className="flex items-center justify-center lg:justify-start gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 text-green-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Trusted by over 100+ Customers
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default pricing