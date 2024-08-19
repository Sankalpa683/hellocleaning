import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Howitworks from './components/howitworks'
import OurServices from './components/services'
import OurBenefits from './components/benefit'
import Checklist from './components/checklist'
import Faqs from './components/faqs'
import { MdAddCall } from "react-icons/md";
import Pricing from './components/pricing'
import Footer from './components/footer'


const index = () => {
  return (
    <>
      <main className='relative'>
        <Nav />
        
        <Hero />
        <Howitworks />
        <OurServices />
        <OurBenefits />
        <Checklist />
        <Faqs />
        
        <Pricing />
        
        <Footer />
        <div className='flex justify-end items-end text-end sticky w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4 bottom-0 right-4 z-40'>
          <button className='bg-[#007aff] hover:bg-blue-700 hover:shadow-lg transition-all text-xl capitalize flex items-center text-white sm:gap-1 lg:gap-2 md:gap-2 font-medium p-5 rounded-full'>
            <MdAddCall />
          </button><br /><br />
        </div>
      </main>
    </>
  )
}

export default index