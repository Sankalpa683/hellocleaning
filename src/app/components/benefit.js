import React from 'react';
import { FaHandsHelping, FaShieldAlt, FaClock, FaLeaf } from 'react-icons/fa';
import { MdOutlineThumbUp } from 'react-icons/md';

const benefits = [
  {
    title: "Experienced & Trusted Team",
    description:
      "Our team is highly trained and thoroughly vetted, ensuring you receive the best and most reliable service.",
    icon: <FaHandsHelping className='w-10 h-10' />,
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "We stand by our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
    icon: <MdOutlineThumbUp className='w-10 h-10' />,
  },
  {
    title: "Safe & Eco-Friendly Products",
    description:
      "We use environmentally safe and non-toxic products, keeping your home safe and healthy.",
    icon: <FaLeaf className='w-10 h-10' />,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Our services are available when you need them. We offer flexible scheduling to fit your lifestyle.",
    icon: <FaClock className='w-10 h-10' />,
  },
  {
    title: "Insured & Secure",
    description:
      "Your peace of mind is our priority. Our services are fully insured, giving you complete protection.",
    icon: <FaShieldAlt className='w-10 h-10' />,
  },
];

const Benefit = ({ title, description, icon }) => {
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

const OurBenefits = () => {
  return (
    <>
      <section className='py-16 bg-white dark:bg-neutral-900' id='benefits'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <p className="font-medium text-lg text-[#007aff]">Why Choose Us</p>
            <h2 className='text-4xl pt-10 font-extrabold text-neutral-800 dark:text-neutral-100'>
              The Benefits of Choosing <span className='text-[#007aff]'>Our Services</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit) => (
              <Benefit key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>
      <br />
      <hr />
    </>
  );
};

export default OurBenefits;
