
import { BiSolidNavigation } from "react-icons/bi";

const TopSelling = () => {

  return (
    <div className='topselling w-full h-auto'>
      <div className="top flex flex-col justify-center items-center font-bold w-full mb-8">
        <h1 className='text-gray-600'>Top Sellings</h1>
        <h1 className=' px-5 text-[5vw]  flex flex-wrap lg:px-0 lg:text-[40px]'>Top Destinations</h1>
      </div>
      <div className="boxes flex justify-center items-center flex-wrap  lg:gap-20 text-gray-500">


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


      </div>
    </div>
  )
}

export default TopSelling
