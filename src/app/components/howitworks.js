import React from 'react'
import SparklesText from "@/components/magicui/sparkles-text";

const howitworks = () => {

  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <div className='flex flex-wrap items-center flex-col justify-center text-center'>
            <SparklesText text={<h1 className='text-3xl sm:text-5xl font-extrabold'>
              How we <span className='text-[#007aff]'>works</span>
            </h1>} />
            <p className='text-lg sm:text-xl font-extralight py-6'>
              We’re all about making your life easier with our professional
              & reliable cleaners in Sydney. Our commitment to quality and customer
              satisfaction sets us apart in providing top-tier house cleaning
              solutions for all your needs. From end of lease to move-in and
              carpet cleaning, our house cleaners in Sydney will ensure a spotless
              and healthy living environment for you and your family.
            </p>
          </div>
        </div>
      </section>
      <hr />
    </>
  )
}

export default howitworks