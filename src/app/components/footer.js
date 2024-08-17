import React from 'react'

const footer = () => {
  return (
    <>
    <section className='py-4'>
        <div className='flex flex-col lg:flex-row px-2 lg:px-8 items-center justify-between'>
            <div className='pb-4'>
                <img src="/footer.png" width={210}/>
            </div>
            {/* <div className='flex items-center capitalize gap-6 lg:gap-8 text-gray-500'>
                <a className='hover:text-[#007aff] cursor-pointer transition-all' href='#section'>About us</a>
                <a className='hover:text-[#007aff] cursor-pointer transition-all'>terms & privacy</a>
                <a className='hover:text-[#007aff] cursor-pointer transition-all'>our services</a>
            </div> */}
        </div>
    </section>
    </>
  )
}

export default footer