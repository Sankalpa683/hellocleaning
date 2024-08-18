"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/textarea';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwvnwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <h1 className='py-6 text-4xl w-full text-center'>Fill the <span className='text-[#007aff]'>form below!</span></h1>
      <div className='flex border-4 border-[#007aff] rounded-lg mx-4 flex-col flex-wrap gap-4 px-8 py-6'>
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
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
