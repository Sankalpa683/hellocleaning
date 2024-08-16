import React from 'react'
import AvatarCircles from "@/components/magicui/avatar-circles";
import { FaStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";



const hero = () => {
  const avatarUrls = [
    "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/449331214_790819343227746_6752291036331613180_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bXVd8yzoImMQ7kNvgFl1rcv&_nc_ht=scontent.fbir1-1.fna&oh=00_AYAbljN-1EtdBYB74ByVS9RLo5MMzI4PvbmJeEX54IpXBg&oe=66C39C6D",
    "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/442495280_1442142776669571_7854167644060613440_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fWvy323r7cIQ7kNvgFZPF9Y&_nc_ht=scontent.fbir1-1.fna&oh=00_AYAhFILqKDyA1BGMcNOkLCeC8PE1cn7NQ3KT8y5p_FQxcg&oe=66C3A9B2",
    "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428392389_2321069511420124_4691759866267925847_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Rkk5c2dSkE0Q7kNvgGcoPx9&_nc_ht=scontent.fbir1-1.fna&oh=00_AYBBpKRhkzjQ04n8l9-lva1BanhzqtAuNkChMiXHgCmKQg&oe=66C391E7",
    "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/441313520_2136511426704460_7205575581304980294_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=J5jelk054XgQ7kNvgEK-RuT&_nc_ht=scontent.fbir1-1.fna&oh=00_AYAcWOGx8UdrvtG-1W-Dkv15z5goSAwe6JyWw9upIbJVGw&oe=66C39A81",
  ];
  return (
    <>
      <section className='bg-gradient-to-b from-white to-blue-100 z-50  py-6 lg:py-16 md:py-10 sm:py-6'>
        <div className='flex px-3 flex-wrap items-center text-3xl justify-center gap-10 lg:text-4xl md:text-4xl sm:items-center md:items-center lg:items-start'>
          <div className='w-[500px] md:block lg:hidden sm:block flex-wrap items-center justify-center'>
            <img src='https://exitcleaners.com.au/wp-content/uploads/2023/12/end-of-lease-cleaning-sydney.png' className='w-full shadow-lg rounded-lg ' />
          </div>
          <div className='text-center py-6 flex flex-col flex-wrap items-center md:items-start lg:items-start justify-center w-full lg:w-[800px]'>
            <h1 className='text-5xl hidden lg:block font-extrabold text-center md:text-start lg:text-start w-full sm:w-[700px]'>Sydney's Top-Rated Cleaning Services.
              <span className='text-[#007aff]'> Clean Homes Makes Happy Lives.</span></h1>
            <h1 className='text-4xl block lg:hidden font-extrabold text-center md:text-start lg:text-start w-full sm:w-[700px]'>Sydney's Top-Rated
              <span className='text-[#007aff]'> Cleaning Services.</span></h1>
            <div className='flex flex-2 py-2 items-center justify-center gap-5 lg:gap-8'>
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} className='py-6' />

              <div className='flex flex-col items-center justify-center text-center'>

                <div className='flex text-center justify-center items-center'>
                  <FaStar className='text-yellow-400 text-2xl' />
                  <FaStar className='text-yellow-400 text-2xl' />
                  <FaStar className='text-yellow-400 text-2xl' />
                  <FaStar className='text-yellow-400 text-2xl' />
                  <FaStar className='text-yellow-400 text-2xl hidden sm:block' />
                </div>
                <p className='text-sm'>Over 100+ Customers<br className='sm:block lg:hidden md:hidden'/> Satisfied</p>
              </div>
            </div>
            <p className='text-xl font-thin py-1 text-center lg:text-start md:text-center w-full'>
              Transform your space with professional cleaning. Book today for just $49. Satisfaction guaranteed or get your money back.
            </p>
            <div className='py-4 flex flex-wrap flex-row items-center justify-center sm:justify-start text-center md:text-center gap-6 w-full'>
              <button className='bg-[#007aff] hover:bg-blue-700 hover:shadow-lg transition-all text-xl capitalize flex items-center text-white gap-1 px-4 font-medium py-2 rounded-lg'>
                  Get a quote now
              </button>
              <img src='https://s.driving-tests.org/cdl-premium/passguarantee-orig.svg' className='w-26 h-12' />
            </div>
            <div className='text-base font-thin py-4 '>
              <ul className="text-base-content-secondary leading-relaxed space-y-1 mt-4 flex flex-col flex-wrap items-start justify-start text-start">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-[18px] h-[18px] text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quick & Easy Online Booking
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-[18px] h-[18px] text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Up to 99% Customer Satisfaction
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-[18px] h-[18px] text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trusted by over 100+ Customers
                </li>
              </ul>
            </div>

          </div>
          <div className='w-[500px] hidden lg:block flex-wrap items-center justify-center'>
            <img src='https://exitcleaners.com.au/wp-content/uploads/2023/12/end-of-lease-cleaning-sydney.png' className='w-full rounded-lg border-4 border-blue-400' />
          </div>
        </div>
      </section>
    </>
  )
}

export default hero