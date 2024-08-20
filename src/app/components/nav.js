"use client"

import React, { useState } from 'react';
import { IoDiamondOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Button from '@/components/button'
import { motion, AnimatePresence } from 'framer-motion';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className='p-2 pb-3 bg-white shadow sticky top-0 z-50'>
                <header className='flex text-sm flex-wrap px-1 justify-between lg:justify-around items-center'>
                    <a href='/'>
                        <div className='flex items-center gap-1'>
                            <img
                                src='https://byedispute.com/_next/static/media/icon.541e58e6.png'
                                width='50px'
                                height='50px'
                                alt='Logo'
                            />
                            <span className='font-bold lg:font-extrabold text-xl lg:text-2xl flex gap-1'>
                                Hello Cleaning<br /><span className='text-[#007aff]'>Facility</span>
                            </span>
                        </div>
                    </a>
                    <div className='hidden px-5 lg:flex text-lg items-center gap-14'>
                        <p className='cursor-pointer hover:text-blue-700 transition-all'>Services</p>
                        <p className='cursor-pointer hover:text-blue-700 transition-all'>How we works</p>
                        <p className='cursor-pointer hover:text-blue-700 transition-all'>Benefit</p>
                        <p className='cursor-pointer hover:text-blue-700 transition-all'>Pricing</p>
                        <p className='cursor-pointer hover:text-blue-700 transition-all'>FAQs</p>
                    </div>
                    <div className='hidden sm:flex gap-6 lg:gap-5 justify-center items-center'>
                        <a href='/book-now'>
                            <button className='bg-[#007aff] hover:bg-blue-700 hover:shadow-lg transition-all text-sm sm:text-lg capitalize flex items-center text-white gap-2 px-4 font-medium py-2 rounded-lg'>
                                <IoDiamondOutline /> Book our service online
                            </button>
                        </a>
                    </div>
                    <div className='flex items-center justify-center text-center sm:hidden cursor-pointer px-1' onClick={handleMenuToggle}>
                        <CiMenuBurger className='text-2xl' />
                    </div>
                </header>
                <AnimatePresence >
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-50 mt-2'
                        >
                            <div className='flex flex-col gap-5 items-center justify-center'>
                                <p className='cursor-pointer hover:text-blue-700 transition-all mb-2'>Services</p>
                                <p className='cursor-pointer hover:text-blue-700 transition-all mb-2'>How we works</p>
                                <p className='cursor-pointer hover:text-blue-700 transition-all mb-2'>Benefit</p>
                                <p className='cursor-pointer hover:text-blue-700 transition-all mb-2'>Pricing</p>
                                <p className='cursor-pointer hover:text-blue-700 transition-all mb-4'>FAQs</p>
                            </div>
                            <hr />
                            <div className='pt-4 w-full justify-center items-center text-center'>
                                <a href="/book-now">
                                    <button className='bg-[#007aff] py-3 text-center justify-center w-full capitalize flex items-center text-white gap-2 px-4 font-medium  rounded-lg'>
                                        <IoDiamondOutline /> Book our service online
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <hr />
        </>
    );
};

export default Nav;
