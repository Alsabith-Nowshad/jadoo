"use client"
import { BiSolidNavigation } from "react-icons/bi";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {EffectCoverflow,Pagination,Navigation} from "swiper"

const TopSelling = () => {

  return (
    <div className='topselling w-full h-auto items-center justify-center flex flex-wrap'>
      <div className="top flex flex-col justify-center items-center font-bold w-full mb-8">
        <h1 className='text-gray-600'>Top Sellings</h1>
        <h1 className=' px-5 text-[5vw]  flex flex-wrap lg:px-0 lg:text-[40px]'>Top Destinations</h1>
      </div>
      <div className="boxes flex justify-center items-center flex-wrap  lg:gap-20 text-gray-500">

{/* <Swiper
effect={"Coverflow"}
loop={true}
centeredSlides={true}
grabCursor={true}
slidesPerView={5}
coverflowEffect={

  {  rotate: 0,
    stretch: 0,
    depth: 100,
    modifier:2.5
}

}
> */}
    {/* <SwiperSlide> */}
    <div className="boxes items-center justify-center flex flex-wrap gap-10">
        <div className="box1 bg-white w-[300px] h-[500px] rounded-[50px]">
            <div className="top">
                <img className='bg-contain w-[440px] rounded-tl-[50px] rounded-tr-[50px]' src="/topSelling1.png" alt="" />
            </div>
                <div className="bottom">
                    <div className="bottom-top flex justify-between items-center px-5 py-3">
                        <h1>Roma,Italy</h1>
                        <h1>$5,42K</h1>
                    </div>
                    <div className="bottom-bottom flex gap-4 items-center px-5">
                    <BiSolidNavigation className="text-black " />
                    <h1>10 Days Trips</h1>
                    </div>
                </div>
        </div>
        {/* </SwiperSlide> */}

        {/* <SwiperSlide> */}
        <div className="box1 bg-white w-[300px] h-[500px] rounded-[50px]">
            <div className="top">
                <img className='bg-contain w-[440px] rounded-tl-[50px] rounded-tr-[50px]' src="/topSelling2.jpg" alt="" />
            </div>
                <div className="bottom">
                    <div className="bottom-top flex justify-between items-center px-5 py-3">
                        <h1>Roma,Italy</h1>
                        <h1>$5,42K</h1>
                    </div>
                    <div className="bottom-bottom flex gap-4 items-center px-5">
                    <BiSolidNavigation className="text-black " />
                    <h1>10 Days Trips</h1>
                    </div>
                </div>
        </div>
        {/* </SwiperSlide> */}



        {/* <SwiperSlide> */}
        
        <div className="box1 bg-white w-[300px] h-[500px] rounded-[50px]">
            <div className="top">
                <img className='bg-contain w-[440px] rounded-tl-[50px] rounded-tr-[50px]' src="/topSelling3.png" alt="" />
            </div>
                <div className="bottom">
                    <div className="bottom-top flex justify-between items-center px-5 py-3">
                        <h1>Roma,Italy</h1>
                        <h1>$5,42K</h1>
                    </div>
                    <div className="bottom-bottom flex gap-4 items-center px-5">
                    <BiSolidNavigation className="text-black " />
                    <h1>10 Days Trips</h1>
                    </div>
                </div>
        </div>
        {/* </SwiperSlide> */}

        {/* <SwiperSlide> */}
        <div className="box1 bg-white w-[300px] h-[500px] rounded-[50px]">
            <div className="top">
                <img className='bg-contain w-[440px] rounded-tl-[50px] rounded-tr-[50px]' src="/topSelling1.png" alt="" />
            </div>
                <div className="bottom">
                    <div className="bottom-top flex justify-between items-center px-5 py-3">
                        <h1>Roma,Italy</h1>
                        <h1>$5,42K</h1>
                    </div>
                    <div className="bottom-bottom flex gap-4 items-center px-5">
                    <BiSolidNavigation className="text-black " />
                    <h1>10 Days Trips</h1>
                    </div>
                </div>
        </div>
        {/* </SwiperSlide> */}
        {/* </Swiper> */}

        </div>
      </div>
    </div>
  )
}

export default TopSelling
