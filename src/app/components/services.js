import React from 'react';
import { FaHome, FaBroom, FaCouch, FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineCleaningServices } from 'react-icons/md';

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Our comprehensive home cleaning services ensure every corner of your house sparkles. From kitchens to bathrooms, our team handles it all with care.",
    icon: <FaHome className='w-10 h-10' />,
  },
  {
    title: "End of Lease Cleaning",
    description:
      "Moving out? Our end-of-lease cleaning service guarantees that your property is left in pristine condition, helping you secure your bond back.",
    icon: <FaBroom className='w-10 h-10' />,
  },
  {
    title: "Carpet & Upholstery Cleaning",
    description:
      "We provide deep cleaning services for carpets and upholstery, removing dirt, stains, and allergens, leaving your home fresh and healthy.",
    icon: <FaCouch className='w-10 h-10' />,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Our team offers reliable commercial cleaning services tailored to businesses of all sizes, ensuring a clean and professional workspace.",
    icon: <MdOutlineCleaningServices className='w-10 h-10' />,
  },
  {
    title: "Regular Cleaning",
    description:
      "Keep your home consistently clean with our regular cleaning service. Schedule weekly, bi-weekly, or monthly visits that fit your lifestyle.",
    icon: <FaRegCalendarAlt className='w-10 h-10' />,
  },
];

const Service = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col py-6 px-4 text-start border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 duration-300'>
      <div className='mb-4 text-blue-500'>
        {icon}
      </div>
      <h3 className='text-2xl font-bold mb-2'>
        {title}
      </h3>
      <p className='text-neutral-600 dark:text-neutral-400'>
        {description}
      </p>
    </div>
  );
};

const OurServices = () => {
  return (
    <>
      <section className='py-16 bg-white dark:bg-neutral-900'>
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
