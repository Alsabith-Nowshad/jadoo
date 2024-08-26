import React from 'react'

function Category() {
  return (
    <div className='Category relative w-full h-auto mb-20 mt-20 justify-center items-center lg:px-0'>
      <div className="top flex flex-col justify-center items-center font-bold w-full mb-8">
        <h1 className='text-gray-600'>CATEGORY</h1>
        <h1 className=' px-5 text-[5vw]  flex flex-wrap lg:px-0 lg:text-[40px]'>We Offer Best Services</h1>
        <img className='absolute right-0' src="/CategoryDesign.png" alt="" />
      </div>
      <div className="boxes flex justify-center items-center  flex-wrap gap-10 lg:gap-20">
      <div className="box1 bg-white w-[250px] h-[330px] flex flex-col justify-center items-center gap-10" >
        <div className="image">
    <img  src="/cate1.png" alt="" />
    </div>
    <div className="text flex flex-col justify-center items-center">
    <h1 className='font-bold text-[20px] '>Calculated Weather</h1>
    <p className='p-2 text-[15px] text-justify w-[200px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>
      </div>
      <div className="box1 bg-white w-[250px] h-[330px] flex flex-col justify-center items-center gap-3 shadow-lg rounded-xl" >
        <div className="image">
    <img  src="/cate2.png" alt="" />
    </div>
    <div className="text flex flex-col justify-center items-center">
    <h1 className='font-bold text-[20px] '>Calculated Weather</h1>
    <p className='p-2 text-[15px] text-justify w-[200px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>
      </div>
      <div className="box1 bg-white w-[250px] h-[330px] flex flex-col justify-center items-center gap-10" >
        <div className="image">
    <img  src="/cate3.png" alt="" />
    </div>
    <div className="text flex flex-col justify-center items-center">
    <h1 className='font-bold text-[20px] '>Calculated Weather</h1>
    <p className='p-2 text-[15px] text-justify w-[200px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>
      </div>
      <div className="box1 bg-white w-[250px] h-[330px] flex flex-col justify-center items-center gap-10" >
        <div className="image">
    <img  src="/cate4.png" alt="" />
    </div>
    <div className="text flex flex-col justify-center items-center">
    <h1 className='font-bold text-[20px] '>Calculated Weather</h1>
    <p className='p-2 text-[15px] text-justify w-[200px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Category
