import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import OurServices from './components/services'
import Howitworks from './components/howitworks'
import Faqs from './components/faqs'
import Pricing from './components/pricing'


const index = () => {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Howitworks />
        <OurServices />
        <Faqs />
        <Pricing />
      </main>
    </>
  )
}

export default index