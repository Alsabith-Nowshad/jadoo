import React from 'react'

function EasyFast() {
  return (
    <div className='w-full h-auto  px-[10vw] gap-10 justify-center items-center sm:px-20  lg:flex'>
      <div className="left flex flex-col gap-2">
      <div className="top flex flex-col font-bold w-full mb-8  items-center lg:items-start">
        <h1 className='text-gray-600'>Easy and Fast</h1>
        <h1 className=' px-5 text-[7vw] sm:text-[2vw]  flex flex-wrap lg:px-0 xl:text-[40px]'>Book your next trip <br />
        in 3 easy steps</h1>
      </div>
      <div className="boxes gap-10 flex flex-col justify-center items-center lg:justify-start lg:items-start">
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

      <div className="right flex justify-center items-center pt-10 lg:pt-60  lg:justify-start lg:items-start">


      <img className='sm:w-[550px] ' src="./easysteps1.png" alt="" />


      </div>
    </div>
  )
}

export default EasyFast
