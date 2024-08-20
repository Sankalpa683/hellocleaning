"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MdOutlineNavigateNext } from "react-icons/md";

import Nav from '../components/nav';
import Footer from '../components/footer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwvnwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (

    <>
      <section className="py-12 min-h-screen">
        <div className='pt-6 pb-16 flex flex-col flex-wrap items-center justify-start text-center'>
          <h1 className='text-3xl px-3 lg:text-5xl font-medium'>You’re 60 seconds away <span className='text-[#007aff]'>from a clean home</span></h1>
          <p className='text-lg hidden lg:block lg:text-xl pt-4 lg:pt-8 text-gray-800'>View pricing, availability & book online. <span className='text-[#007aff]'>Have questions?</span></p>
        </div>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            <div className='flex h-fit shadow-book_online rounded-lg col-span-2 mx-3 flex-col flex-wrap gap-6 px-5 py-6'>
              <div className='flex flex-wrap flex-col gap-4'>
                <label htmlFor="email" className='text-2xl font-medium'>
                  Step 1: Choose your service
                </label>
                <p className='text-gray-700'>Select Hourly Cleaning for partial cleaning, extra large or extra dirty homes.</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="General Cleaning" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Cleaning</SelectItem>
                    <SelectItem value="deep">Deep Cleaning</SelectItem>
                    <SelectItem value="lease">End of Lease Cleaning</SelectItem>
                    <SelectItem value="hourly">Hourly Cleaning</SelectItem>
                    <SelectItem value="movein">Move-in Cleaning</SelectItem>
                  </SelectContent>
                </Select>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className='flex flex-wrap flex-col gap-4'>
                <label htmlFor="message" className='text-2xl font-medium'>
                  Step 2: How often would you like your cleaning service?
                </label>
                <p className='text-gray-700'>Get amazing discounts for being a recurring customer.
                </p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="One Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One Time</SelectItem>
                    <SelectItem value="montly">Monthly - 5% off</SelectItem>
                    <SelectItem value="fortnightly">Fortnightly - 10% off</SelectItem>
                    <SelectItem value="weekly">Weekly - 15% off</SelectItem>
                  </SelectContent>
                </Select>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className='flex flex-wrap flex-col gap-4'>
                <label htmlFor="message" className='text-2xl font-medium'>
                  Step 3: How big is your home?
                </label>
                <p className='text-gray-700'>We use this information to estimate the total labour hours required for a thorough clean.  If you have a <b>study, sunroom or
                  office</b>, please add an additional <b>'bedroom'</b>. If you have a separate toilet or powder room, please add an additional '<b>bathroom'</b>. This will ensure your
                  quote is accurate.
                </p>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Bedrooms</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="1 Bedroom" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1 Bedroom</SelectItem>
                        <SelectItem value="two">2 Bedroom</SelectItem>
                        <SelectItem value="three">3 bedroom</SelectItem>
                        <SelectItem value="four">4 Bedroom</SelectItem>
                        <SelectItem value="five">5 Bedroom</SelectItem>
                        <SelectItem value="six">6 Bedroom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Bathrooms</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="1 Bathroom" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1 Bathroom</SelectItem>
                        <SelectItem value="two">2 Bathroom</SelectItem>
                        <SelectItem value="three">3 Bathroom</SelectItem>
                        <SelectItem value="four">4 Bathroom</SelectItem>
                        <SelectItem value="five">5 Bathroom</SelectItem>
                        <SelectItem value="six">6 Bathroom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Kitchens</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="1 Kitchen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1 Kitchen</SelectItem>
                        <SelectItem value="two">2 Kitchen</SelectItem>
                        <SelectItem value="three">3 Kitchen</SelectItem>
                        <SelectItem value="four">4 Kitchen</SelectItem>
                        <SelectItem value="five">5 Kitchen</SelectItem>
                        <SelectItem value="six">6 Kitchen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Living Areas</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="1 Living Area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1 Living Area</SelectItem>
                        <SelectItem value="two">2 Living Area</SelectItem>
                        <SelectItem value="three">3 Living Area</SelectItem>
                        <SelectItem value="four">4 Living Area</SelectItem>
                        <SelectItem value="five">5 Living Area</SelectItem>
                        <SelectItem value="six">6 Living Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Levels</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Single Story" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Story</SelectItem>
                        <SelectItem value="double">Double Story</SelectItem>
                        <SelectItem value="three">Three Story</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-wrap flex-col gap-2'>
                    <label className='font-semibold text-xl'>Laundry</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="0 Laundry Room" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">0 Laundry Room</SelectItem>
                        <SelectItem value="two">1 Laundry Room</SelectItem>
                        <SelectItem value="three">2 Laundry Room</SelectItem>
                        <SelectItem value="four">3 Laundry Room</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className='py-4 flex flex-wrap flex-col gap-4'>
                <h2 className='text-2xl font-medium pb-4'>Step 4: Select your add-ons</h2>
                <div className='grid grid-cols-2 xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3'>
                  {[
                    "Inside Oven", "Range Hood", "Interior Windows", "Exterior Windows",
                    "Inside Cupboards", "Sliding Glass Doors", "Inside Fridge (Empty)",
                    "Inside Fridge (Full)", "Change Bed Linen", "Blinds/Shutters",
                    "Laundry", "Wash Dishes", "Small Balcony", "Large Balcony",
                    "Deck", "Patio", "Garage Sweep & Tidy", "Spot Clean Walls",
                    "Wall Washing", "Dishwasher", "Carpet Steam Clean", "Wardrobe",
                    "Alfresco", "Pantry", "Ceiling Fan", "Enclosed Sunroom", "Driveway Cleaning",
                    "Air Condition"
                  ].map(addOn => (
                    <div key={addOn} className="flex items-center">
                      <input
                        type="checkbox"

                      />
                      <label className="ml-2">{addOn}</label>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className='w-full'>
                <button type="submit" disabled={state.submitting} className='bg-[#007aff] py-3 float-right text-center justify-end w-fit capitalize flex items-center  text-white gap-2 px-4 font-medium  rounded-lg'>
                  Next Step <MdOutlineNavigateNext className='text-xl' />
                </button>
              </div>
            </div>
            <div className='shadow-book_online m-2 px-4 p-3 h-fit text-gray-800 rounded-lg flex flex-wrap flex-col '>
              <h1 className='text-3xl text-center font-medium pb-4'>Booking <span className='text-[#007aff]'>Summary</span></h1>
              <hr />
              <div className='py-4 flex flex-wrap flex-col gap-2'>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Service :</p><span className='font-semibold'>Deep Cleaning</span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Frequency :</p><span className='font-semibold'>Monthly </span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Bedrooms :</p><span className='font-semibold'>1 Bedroom</span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Bathroom :</p><span className='font-semibold'>1  Bathroom</span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Living Areas :</p><span className='font-semibold'>1 Living Areas</span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Levels :</p><span className='font-semibold'>Single Story</span>
                </div>
                <div className='flex flex-wrap justify-between text-xl'>
                  <p className=''>Laundry :</p><span className='font-semibold'>0 Laundry Rooms</span>
                </div>
                <hr />
                <div className='pt-4 flex flex-col flexx-wrap items-center justify-center '>
                  <h1 className='text-2xl text-red-500 text-center font-bold uppercase'>Total: $410.12</h1>
                </div>
              </div>
            </div>
          </div>
        </form >
      </section >
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
