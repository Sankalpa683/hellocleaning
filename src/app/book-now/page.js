"use client";
import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

const BookNow = () => {
    return (
        <>
            <Nav />

            <section className="py-12 w-full bg-gradient-to-r from-fuchsia-200 to-violet-100 min-h-screen">
                <div className='pt-6 pb-16 flex flex-col items-center justify-start text-center'>
                    <h1 className='text-4xl px-4 lg:text-5xl font-medium'>
                        You’re just 60 seconds away <span className='text-[#007aff]'>from a clean home</span>
                    </h1>
                    <p className='text-lg lg:text-xl hidden sm:block pt-4 lg:pt-8 text-gray-800'>
                        View pricing, availability & book online. <span className='text-[#007aff]'>Have questions?</span>
                    </p>
                </div>

                <div className="w-full bg-none sm:bg-white shadow-none sm:shadow-book_online max-w-3xl mx-auto  rounded-lg">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSejuPlJAVgiQqIR14s9DmEbXu5OZABticA5JbL7tbcUGSYmOw/viewform?embedded=true"
                        className="w-full h-screen min-h-[500px] lg:min-h-[700px] border-none"
                        style={{ minHeight: '500px' }}
                        allowFullScreen
                        title="Booking Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default BookNow;
