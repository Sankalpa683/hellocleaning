import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Howitworks from './components/howitworks'
import OurServices from './components/services'
import OurBenefits from './components/benefit'
import Checklist from './components/checklist'
import Faqs from './components/faqs'
import Testomonial from './components/testomonial'
import Pricing from './components/pricing'
import Footer from './components/footer'


const index = () => {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Howitworks />
        <OurServices />
        <OurBenefits />
        <Checklist />
        <Faqs />
        {/* <Testomonial /> */}
        <Pricing />
        <Footer />
      </main>
    </>
  )
}

export default index