import React from 'react'
import { IoGift } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { HiCheck } from "react-icons/hi";


const Pricing = () => {
    return (
        <>
            <section className="bg-base-200 overflow-hidden" id="pricing">
                <div className="pt-24 px-8 max-w-5xl mx-auto">
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
                <div className='flex flex-wrap gap-10 pb-10 items-center justify-center'>
                    <div className='flex flex-wrap flex-col rounded-lg justify-center break-all items-start shadow-custom py-6 p-4 w-[450px]'>
                        <div className='flex flex-wrap flex-col gap-1 pb-5 break-all'>
                            <div className='py-2'>
                                <span className='text-lg uppercase font-medium'>Standard Cleaning</span>
                                <h1 className='text-2xl font-bold capitalize'>Basic Clean</h1>
                            </div>
                            <p className='font-thin text-gray-600'>Ideal for routine cleaning and maintaining a fresh home. Includes dusting, vacuuming, and mopping.</p>
                        </div>
                        <div className='w-full flex-col flex-wrap justify-center items-end'>
                            <div className='flex justify-between items-center pb-4 px-2 w-full'>
                                <p className='text-4xl font-bold'>$99</p>
                                <p>$11/day</p>
                            </div>
                            <button className='bg-[#007aff] rounded-lg text-white p-4 py-3 w-full flex flex-col flex-wrap items-center text-center justify-center'>Book Now</button>
                            <p className='text-[#007aff] flex gap-0 items-center font-medium text-lg capitalize py-4'><IoGift className='w-8' />Gift a Cleaning</p>
                        </div>
                        <div className='flex flex-col flex-wrap items-start py-1 gap-4'>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p className='font-semibold'>Experienced & Professional Cleaners</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Customizable Cleaning Packages</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <VscError className='text-lg text-green-500' />
                                <p>Eco-friendly Cleaning Products</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <VscError className='text-lg text-red-500' />
                                <p>Flexible Scheduling</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <VscError className='text-lg text-red-500' />
                                <p>Thorough & Detailed Cleaning</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-red-500' />
                                <p>Affordable Rates</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col rounded-lg border-4 border-blue-500 justify-center items-start shadow-lg py-6 p-4 w-[450px]'>
                        <div className='flex flex-wrap flex-col gap-1 pb-5 break-all'>
                            <div className='py-2'>
                                <span className='text-lg uppercase font-medium'>Deep Cleaning</span>
                                <h1 className='text-2xl font-bold capitalize'>Premium Clean</h1>
                            </div>
                            <p className='font-thin text-gray-600'>Thorough cleaning for a spotless home. Includes all basic cleaning plus detailed kitchen and bathroom scrubbing.</p>
                        </div>
                        <div className='w-full flex-col flex-wrap justify-center items-end'>
                            <div className='flex justify-between items-center pb-4 px-2 w-full'>
                                <p className='text-4xl font-bold'>$199</p>
                                <p>$22/day</p>
                            </div>
                            <button className='bg-[#007aff] rounded-lg text-white p-4 py-3 w-full flex flex-col flex-wrap items-center text-center justify-center'>Book Now</button>
                            <p className='text-[#007aff] flex gap-0 items-center font-medium text-lg capitalize py-4'><IoGift className='w-8' />Gift a Cleaning</p>
                        </div>
                        <div className='flex flex-col flex-wrap items-start py-1 gap-4'>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p className='font-semibold'>Experienced & Professional Cleaners</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Customizable Cleaning Packages</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Flexible Scheduling</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <VscError className='text-lg text-green-500' />
                                <p>Eco-friendly Cleaning Products</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <VscError className='text-lg text-red-500' />
                                <p>Thorough & Detailed Cleaning</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-red-500' />
                                <p>Affordable Rates</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col rounded-lg justify-center items-start shadow-custom py-6 p-4 w-[450px]'>
                        <div className='flex flex-wrap flex-col gap-1 pb-5 break-all'>
                            <div className='py-2'>
                                <span className='text-lg uppercase font-medium'>End of Lease</span>
                                <h1 className='text-2xl font-bold capitalize'>Move-Out Clean</h1>
                            </div>
                            <p className='font-thin text-gray-600'>Ensure your place is spotless before moving out. Comprehensive cleaning to meet rental requirements.</p>
                        </div>
                        <div className='w-full flex-col flex-wrap justify-center items-end'>
                            <div className='flex justify-between items-center pb-4 px-2 w-full'>
                                <p className='text-4xl font-bold'>$299</p>
                                <p>$33/day</p>
                            </div>
                            <button className='bg-[#007aff] rounded-lg text-white p-4 py-3 w-full flex flex-col flex-wrap items-center text-center justify-center'>Book Now</button>
                            <p className='text-[#007aff] flex gap-0 items-center font-medium text-lg capitalize py-4'><IoGift className='w-8' />Gift a Cleaning</p>
                        </div>
                        <div className='flex flex-col flex-wrap items-start py-1 gap-4'>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p className='font-semibold'>Experienced & Professional Cleaners</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Customizable Cleaning Packages</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Eco-friendly Cleaning Products</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Flexible Scheduling</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Thorough & Detailed Cleaning</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-2 justify-start'>
                                <HiCheck className='text-lg text-green-500' />
                                <p>Affordable Rates</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <hr />
        </>
    )
}

export default Pricing
