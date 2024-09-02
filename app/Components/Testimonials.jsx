import React from 'react'

function Testimonials() {
  return (
    <div className='main flex  items-top  justify-center flex-wrap '>
       <div className="top font-bold mb-8 mx-10">
        <h1 className='text-gray-600'>Top Sellings</h1>
        <h1 className=' px-5 text-[5vw]  flex flex-wrap lg:px-0 lg:text-[40px]'>What people say <br />
        about Us.</h1>
        <div className="dot">
            <h1>...</h1>
        </div>
      </div>
      <div className="imag">
      <img className='w-[90vw] md:w-[700px]' src="/testi-png.png" alt="" />
      </div>
    </div>
  )
}

export default Testimonials
