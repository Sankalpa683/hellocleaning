"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Nav from '../components/nav';
import Footer from '../components/footer';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwvnwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (

    <>
      <div className="py-12 min-h-screen">
        <div className='pt-6 pb-16 flex flex-col flex-wrap items-center justify-start text-center'>
          <h1 className='text-3xl lg:text-5xl font-medium'>You’re 60 seconds away <span className='text-[#007aff]'>from a clean home</span></h1>
          <p className='text-lg hidden lg:block lg:text-xl pt-4 lg:pt-8 text-gray-800'>View pricing, availability & book online. <span className='text-[#007aff]'>Have questions?</span></p>
        </div>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div className='flex h-fit shadow-book_online rounded-lg col-span-2 mx-2 lg:mx-4 flex-col flex-wrap gap-4 px-5 py-6'>
              <div>
                <label htmlFor="email">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor="message">
                  Enter Your Message here!
                </label>
                <Textarea
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <button type="submit" disabled={state.submitting} className='bg-[#007aff] py-3 text-center justify-center w-full capitalize flex items-center text-white gap-2 px-4 font-medium  rounded-lg'>
                  Submit
                </button>
              </div>
            </div>
            <div className='shadow-book_online m-2 p-3 text-gray-800 bg-gradient-to-r from-[#D1F3E4] to-green-300 rounded-lg flex flex-wrap flex-col '>
              <h1 className='text-2xl font-medium pb-4'>Booking <span className='text-[#007aff]'>Summary</span></h1>
              <hr />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <section>
        <Nav />
        <ContactForm />
        <Footer />
      </section>
    </>
  );
}

export default App;
