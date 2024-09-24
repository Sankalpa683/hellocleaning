import React from 'react'
import SparklesText from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";
import { TbBrandBooking } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiCcleaner } from "react-icons/si";
import { BiHomeHeart } from "react-icons/bi";

const features = [
  {
    title: "Easy Online Booking",
    description:
      "Book your cleaning with just a few clicks from our booking page.",
    icon: <TbBrandBooking className='w-10 h-10'/>,
  },
  {
    title: "Custom Cleaning Plan",
    description:
      "Tell us what you need, and we'll create a tailored plan.",
    icon: <RiCustomerService2Line className='w-10 h-10'/>,

  },
  {
    title: "Professional Cleaning",
    description:
      "Our experts clean every corner with attention to detail.",
    icon: <SiCcleaner className='w-10 h-10'/>,

  },
  {
    title: "Enjoy Your Space",
    description: "Relax and enjoy a spotless, clean environment.",
    icon: <BiHomeHeart className='w-10 h-10'/>,

  }
];


const Feature = ({ title, description, index, icon }) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-wrap lg:border-r py-6 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
        
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full flex flex-2 flex-wrap w-fit bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full flex flex-2 flex-wrap w-fit bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-2xl font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const howitworks = () => {
  return (
    <>
      <section className='py-16' id='wework'>
        <div className='container'>
          <div className='flex flex-wrap items-center flex-col justify-center text-center'>
            <p className="font-medium text-lg text-[#007aff] mb-8">How we work</p>

            <SparklesText text={<h1 className='text-3xl sm:text-5xl font-extrabold'>
              Getting your space spotless <span className='text-[#007aff]'>has never been easier.</span>
            </h1>} />
            <p className='text-lg sm:text-xl text-start font-extralight py-6'>
              We make your life easier with our expert cleaners in Sydney. Our dedication to quality and reliability
              ensures that you receive the best cleaning solutions tailored to your needs. From end-of-lease cleanings
              to move-in services and carpet care, our team guarantees a spotless and healthy home environment,
              leaving you with more time to enjoy life’s moments.
            </p>
          </div>
          <div className='py-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10  max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  )
}

export default howitworks
