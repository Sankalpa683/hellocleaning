import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Button from "@/components/button"


const services = [
  {
    title: "End of Lease Cleaning",
    description: "Recommended if you’re moving out of a rental property and need your bond back. And for landlords looking to put their property on the market.",
    benefits: [
      "Super Affordable Prices",
      "Available 7 Days A Week",
      "100% Bond Back Guarantee"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2024/04/end-of-lease-cleaning.png',
  },
  {
    title: "Move-in cleaning",
    description: "Recommended if you’re moving into a property and want it professionally cleaned before you settle in.",
    benefits: [
      "Super Affordable Prices",
      "Available 7 Days A Week",
      "100% Satisfaction Guarantee"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2023/12/Move-in-cleaning-Sydney-NSW-Exit-Cleaners.png',
  },
  {
    title: "Carpet Cleaning",
    description: "Recommended if you're looking to get professionally cleaned carpets. And for end of lease cleans to pass your final inspection.",
    benefits: [
      "Professional Grade Cleaning",
      "Available 7 Days A Week",
      "Fast & Easy Online Booking"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2023/12/Carpet-steam-cleaning-Sydney-NSW-Exit-Cleaners-1.png',
  },
  {
    title: "General Cleaning",
    description: "Great for homes looking for a touch up clean. Recommended if your home is regularly cleaned & maintained.",
    benefits: [
      "Super Affordable Prices",
      "Available 7 Days A Week",
      "100% Satisfaction Guarantee"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2024/04/general-cleaning-service.png',
  },
  {
    title: "Deep cleaning",
    description: "Recommended for homes not professionally cleaned in over 30 days. And for first-time visits to get your home prepared for ongoing maintenance.",
    benefits: [
      "Super Affordable Prices",
      "Available 7 Days A Week",
      "100% Satisfaction Guarantee"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2024/04/deep-cleaning-service.png',
  },
  {
    title: "Regular Cleaning",
    description: "Recommended for busy families and professionals looking for a consistently clean home without the stress.",
    benefits: [
      "Super Affordable Prices",
      "Available 7 Days A Week",
      "100% Satisfaction Guarantee"
    ],
    image: 'https://exitcleaners.com.au/wp-content/uploads/2024/04/regular-cleaning-service.png',
  },
];

const Service = ({ title, description, benefits, image }) => {
  return (
    <div className='flex flex-col py-6 px-4 text-start border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 duration-300'>
      <img src={image} alt={title} className='rounded-lg mb-4 w-full h-48 object-cover' />
      <h3 className='text-2xl font-bold mb-2'>
        {title}
      </h3>
      <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
        {description}
      </p>
      <ul className='text-neutral-600 dark:text-neutral-400 mb-4'>
        {benefits.map((benefit, index) => (
          <li key={index} className='flex flex-wrap items-center justify-start gap-2 mb-1'>
            <HiCheck className='text-lg text-green-500' />
            {benefit}
          </li>
        ))}
      </ul>
      <div className='mt-auto'>
        <a href='/book-now'><button className='bg-[#007aff] py-3 w-full text-center justify-center capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg'>
          <MdCleaningServices /> Book this service ➜
        </button></a>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <>
      <section className='py-16 bg-white dark:bg-neutral-900' id='services'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <p className="font-medium text-lg text-[#007aff]">Our Services</p>
            <h2 className='text-4xl pt-10 font-extrabold text-neutral-800 dark:text-neutral-100'>
              Quality Cleaning Services <span className='text-[#007aff]'>Tailored to Your Needs</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <Service key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <br />
      <hr />
    </>
  );
};

export default OurServices;
