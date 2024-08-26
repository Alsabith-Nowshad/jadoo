import React from 'react'

function EasyFast() {
  return (
    <div className='w-full h-screen px-[10vw] sm:px-40'>
      <div className="left flex flex-col gap-5">
      <div className="top flex flex-col font-bold w-full mb-8">
        <h1 className='text-gray-600'>Top Sellings</h1>
        <h1 className=' px-5 text-[5vw]  flex flex-wrap lg:px-0 lg:text-[60px]'>Book your next trip <br />
        in 3 easy steps</h1>
      </div>
      <div className="box flex gap-5 items-center">
        <div className="box-left">
            <img src="../estst1.png" alt="" />
        </div>
        <div className="box-right">
            <h1 className='font-bold text-gray-600'>Choose Destination</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>

      <div className="box flex gap-5 items-center">
        <div className="box-left">
            <img src="../estst2.png" alt="" />
        </div>
        <div className="box-right">
            <h1 className='font-bold text-gray-600'>Choose Destination</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>

      <div className="box flex gap-5 items-center">
        <div className="box-left">
            <img src="../estst3.png" alt="" />
        </div>
        <div className="box-right">
            <h1 className='font-bold text-gray-600'>Choose Destination</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EasyFast
