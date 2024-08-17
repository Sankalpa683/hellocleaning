import React from 'react'

const footer = () => {
  return (
    <>
    <section className='py-4'>
        <div className='flex flex-col px-2 lg:px-8 items-center justify-between'>
            <div className='pb-4'>
                <img src="/footer.png" width={210}/>
            </div>
            <div className='flex items-center justify-center text-center w-full break-all text-gray-500'>
                <p>Copyright &copy; 2024 <span className='text-[#007aff]'>Hello Cleaning Facility</span>. Designed & Developed By <a href='https://www.facebook.com/SankIsMe/' target='_blank' className='text-[#007aff]'>Sankalpa Dahal</a></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default footer